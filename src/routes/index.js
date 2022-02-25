import {
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_PROFILE,
  ROUTE_FORGOT_PASSWORD,
  ROUTE_INBOX,
  ROUTE_PROCESSED,
  ROUTE_PATIENT_REPORTS,
  ROUTE_ARCHIVED,
  ROUTE_TRASH
} from './constant';

import Login from '../pages/login';
import Signup from '../pages/signup';
import Profile from '../pages/profile';
import ForgotPassword from '../pages/forgotpassword';
import Inbox from '../pages/inbox';
import PatientReports from '../pages/patientReports';
import Trash from '../pages/trash';
import Archived from '../pages/archived';
import Processed from '../pages/processed';

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
  },
  {
    path: ROUTE_PROFILE,
    component: Profile
  }
];

export const dashboardRoutes = [
  {
    path: ROUTE_INBOX,
    component: Inbox
  },
  {
    path: ROUTE_PROCESSED,
    component: Processed
  },
  {
    path: ROUTE_PATIENT_REPORTS,
    component: PatientReports
  },
  {
    path: ROUTE_ARCHIVED,
    component: Archived
  },
  {
    path: ROUTE_TRASH,
    component: Trash
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
    redirectTo: ROUTE_INBOX
  }
];
