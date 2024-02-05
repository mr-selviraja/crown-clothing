import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './routes/Home/Home.component';
import Navigation from './components/Navigation/Navigation.component';
import Page404 from './routes/Page404/Page404.component';
import Authentication from './routes/Authentication/Authentication.component';
import Shop from './routes/Shop/Shop.component';
import Checkout from './routes/Checkout/Checkout.component';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Home /> },
        { path: 'shop', element: <Shop /> },
        { path: 'auth', element: <Authentication /> },
        { path: 'checkout', element: <Checkout /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
