#!/bin/sh
cd /app/server

echo "Collecting Django static files..."
python3 manage.py collectstatic

echo "Starting myBudget server..."
mkdir -p /var/log/gunicorn # TODO extract var
#gunicorn server.wsgi --bind 0.0.0.0:8000 --daemon --name myBudget --workers 4 --user=app --group=app --log-level INFO
nohup gunicorn server.wsgi --bind 0.0.0.0:8000 --daemon --name myBudget --workers 4 --user=$(whoami) --group=app > /var/log/gunicorn/run.log &
echo "Starting nginx at port :$PORT..."
envsubst '$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf
nginx -g 'daemon off;'
echo "DONE"
