import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Index.jsx";
import UserIndex from "./Components/user/UserIndex.jsx";
import UserHome from "./Components/user/UserHome.jsx";
import AdminIndex from "./Components/admin/AdminIndex.jsx";
import AdminHome from "./Components/admin/AdminHome.jsx";
import Register from "./Components/user/page/Log&Reg/Register.jsx";
import Login from "./Components/user/page/Log&Reg/Login.jsx";
import Product from "./Components/user/page/Product/Product.jsx";
import History from "./Components/user/page/history/History.jsx";
import Cart from "./Components/user/page/cart/Cart.jsx";
import About from "./Components/user/page/about/About.jsx";
import Contact from "./Components/user/page/contact/Contact.jsx";
import Profile from "./Components/admin/page/Profile.jsx";
import Watchlist from "./Components/admin/page/Watchlist.jsx";
import Overview from "./Components/admin/page/Overview.jsx";
import Penal from './Components/admin/page/Panal.jsx'
import Update from "./Components/admin/page/Update.jsx";
import Form from "./Components/admin/page/Form.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/",
          element: <UserIndex />,
          children: [
            { path: "/", element: <UserHome /> },
            { path: "/register", element: <Register /> },
            { path: "/login", element: <Login /> },
            { path: "/product", element: <Product /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/history", element: <History /> },
            { path: "/cart", element: <Cart /> },
          ],
        },
        {
          path: "/admin",
          element: <AdminIndex />,
          children: [
            { path: "/admin", element: <AdminHome /> },
            { path: "/admin/profile", element: <Profile /> },
            { path: "/admin/profile", element: <Profile /> },
            { path: "/admin/watchlist", element: <Watchlist /> },
            { path: "/admin/overview", element: <Overview /> },
            { path: "/admin/update", element: <Update /> },
            { path: "/admin/form", element: <Form /> },
            { path: "/admin/history", element: <History /> },
            { path: "/admin/panel", element: <Penal /> },
          ],
        },
      ],
    },
    {
      future: {
        v7_partialHydration: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_relativeSplatPath: true,
      },
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
