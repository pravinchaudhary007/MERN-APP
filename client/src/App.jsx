import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from "./Index.jsx"
import UserIndex from './Components/user/UserIndex.jsx';
import UserHome from './Components/user/UserHome.jsx';
import AdminIndex from './Components/admin/AdminIndex.jsx';
import AdminHome from './Components/admin/AdminHome.jsx';
import Register from './Components/user/page/Register.jsx';
import Login from './Components/user/page/Login.jsx';
import DeshBoard from './Components/admin/DeshBoard.jsx';
import Product from './Components/user/page/Product.jsx';

function App() {
 
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Index/>,
      children : [
        {
          path:'/',
          element: <UserIndex/>,
          children :[
            {path:'/' ,element: <UserHome/>},
            {path:'/register',element:<Register/>},
            {path:'/login',element:<Login/>},
            {path:'/product',element:<Product/>}
          ]
        },
        {
          path:'/admin',
          element: <AdminIndex/>,
          children :[
            {path:'**/' ,element: <AdminHome/>},
            {path:'/admin/deshboard',element:<DeshBoard/>},
          ]
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </>
  )
}

export default App
