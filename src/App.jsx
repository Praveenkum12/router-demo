import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Menu from './features/Menu';
import Contact from './features/Contact';
import About from './features/About';
import HomePage from './ui/HomePage';
import ErrorPage from './ui/ErrorPage';
import Login from './ui/Login';
import SignUp from './ui/SignUp';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/menu',
          element: <Menu />,
          children: [
            {
              path: 'login',
              element: <Login />,
            },
            {
              path: 'signup',
              element: <SignUp />,
            },
          ],
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
