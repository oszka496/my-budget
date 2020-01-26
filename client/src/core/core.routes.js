import { ProfileLayout } from '../profile/components';
import { TransactionLayout } from '../transactions/components';

export const coreRedirect = '/transactions';
export const coreRoutes = {
  profile: { href: '/profile', component: ProfileLayout },
  transactions: { href: '/transactions', component: TransactionLayout },
};

export default {
  redirect: coreRedirect,
  routes: coreRoutes,
};
