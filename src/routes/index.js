import {
  ROUTE_ACCOUNT_MANUFACTURE,
  ROUTE_ACCOUNT_SUPPLIER,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_FORGOT_PASSWORD
} from './constant';

import Login from '../pages/login';
import Signup from '../pages/signup';
import ForgotPassword from '../pages/forgotpassword';
import Manufacture from '../pages/manufacture';
import Supplier from '../pages/supplier';

export const loginRoutes = [
  {
    path: ROUTE_LOGIN,
    component: Login
  },
  {
    path: ROUTE_SIGNUP,
    component: Signup
  },
  {
    path: ROUTE_FORGOT_PASSWORD,
    component: ForgotPassword
  }
];

export const dashboardRoutes = [
  {
    path: ROUTE_ACCOUNT_SUPPLIER,
    component: Supplier
  },
  {
    path: ROUTE_ACCOUNT_MANUFACTURE,
    component: Manufacture
  }
];

export const loginRedirects = [
  {
    path: '/',
    redirectTo: ROUTE_LOGIN
  }
];

export const dashboardRedirects = [
  {
    path: '/',
    redirectTo: ROUTE_ACCOUNT_SUPPLIER
  }
];
