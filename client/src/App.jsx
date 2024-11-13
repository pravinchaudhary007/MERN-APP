import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./Index.jsx";
import UserIndex from "./Components/user/UserIndex.jsx";
import UserHome from "./Components/user/UserHome.jsx";
import AdminIndex from "./Components/admin/AdminIndex.jsx";
import AdminHome from "./Components/admin/AdminHome.jsx";
import DeshBoard from "./Components/admin/DeshBoard.jsx";
import Register from "./Components/user/page/Log&Reg/Register.jsx";
import Login from "./Components/user/page/Log&Reg/Login.jsx";
import Product from "./Components/user/page/Product/Product.jsx";
import History from "./Components/user/page/history/History.jsx";
import Cart from "./Components/user/page/cart/Cart.jsx";
import About from "./Components/user/page/about/About.jsx";
import Contact from "./Components/user/page/contact/Contact.jsx";


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
            { path: "**/", element: <AdminHome /> },
            { path: "/admin/deshboard", element: <DeshBoard /> },
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
