import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import MainPanel from '../pages/MainPanel';
import PrivateRoute from '../components/PrivateRoute';

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/mainPanel",
    
    element: (
      <PrivateRoute>
        <MainPanel />
      </PrivateRoute>
    ),
  },
]);