# Build Client
FROM node:12.14.1-alpine as buildpack

WORKDIR /app/client

ARG CI=true
COPY client/package*.json ./
COPY client/.npmrc ./

RUN npm ci
COPY client /app/client
RUN npm run build

# Build Server
FROM python:3.8.0-alpine as server-buildpack

WORKDIR /app/server

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install --upgrade pip
COPY server/requirements /app/server/requirements
RUN pip wheel --no-cache-dir --no-deps --wheel-dir /app/server/wheels -r ./requirements/base.txt

# Final image
FROM nginx:1.16.1-alpine
WORKDIR /app/server
RUN addgroup -S app && adduser -S app -G app

RUN apk add --no-cache \
        uwsgi-python3 \
        python3

RUN apk add --update --no-cache \
    bash \
    python3 \
    python3-dev \
    py3-pip

COPY --from=server-buildpack /app/server/wheels /wheels
COPY --from=server-buildpack /app/server/requirements .
RUN pip3 install --upgrade pip && pip3 install --no-cache /wheels/*

COPY ./server /app/server

COPY config /etc/nginx/conf.d
COPY --from=buildpack /app/client/build /usr/share/nginx/html

RUN chown -R app:app /app/server && \
    chmod +x /app/server/entrypoint.sh
USER app
#EXPOSE $PORT
CMD ["/app/server/entrypoint.sh"]
