import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './components/Navigation/Navigation.component';
import Page404 from './routes/Page404/Page404.component';
import Shop from './routes/Shop/Shop.component';
import SignIn from './routes/SignIn/SignIn.component';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'sign-in', element: <SignIn /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
