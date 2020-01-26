import { LoginForm } from './components';

export const authRedirect = '/login';
export const authRoutes = {
  login: { href: '/login', component: LoginForm },
};

export default {
  redirect: authRedirect,
  routes: authRoutes,
};
