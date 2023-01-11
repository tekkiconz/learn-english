import { Navigate, useRoutes } from 'react-router-dom';
import GuestGuard from '../auth/GuestGuard';
import MainLayout from '../layouts/main';
import CompactLayout from '../layouts/compact';
import {
  LoginPage,
  RegisterPage,
  Page404,
  HomePage,
  LearningSectionPage,
  LearningPage,
} from './elements';

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <LoginPage />
            </GuestGuard>
          ),
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <RegisterPage />
            </GuestGuard>
          ),
        },
      ],
    },

    // Main Routes
    {
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
        {
          path: 'learn',
          children: [
            { element: <LearningPage />, index: true },
            { path: ':id', element: <LearningSectionPage /> },
          ],
        },
      ],
    },

    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
