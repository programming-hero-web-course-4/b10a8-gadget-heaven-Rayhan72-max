import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Gadgets from './Components/Gadgets.jsx';
import Homepage from './Homepage/Homepage.jsx';
import ProductOptions from './Components/ProductOptions.jsx';
import Details from './Pages/Details.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Cart from './Components/Cart.jsx';
import WishList from './Components/WishList.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import About from './Pages/About.jsx';
import Unable from './Pages/Unable.jsx';
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[{
      path: "/",
      element: <Homepage />,
      children:[{
        path:"/",
        element: <ProductOptions></ProductOptions>,
        loader:({params})=> fetch("./gadgets.json") 
      },
      {
        path:"/categories/:category",
        element: <ProductOptions></ProductOptions>,
        loader:({params})=> fetch("./gadgets.json") 
      }]
    },
  {
    path:"/details/:id",
    element: <Details></Details>,
    loader:({params})=>fetch("./gadgets.json")
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
     children:[
      
       {
        path:"/dashboard",
        element:<Cart></Cart>,
        loader:({params})=> fetch("./gadgets.json")
      } ,
      {
        path:"/dashboard/cart",
        element:<Cart></Cart>,
        loader:({params})=> fetch("./gadgets.json")
      },
      {
        path:"/dashboard/wishList",
        element:<WishList></WishList>
      }
    ] 
  },
{
  path:"/about",
  element: <About></About>
},

      
]},
{
  path:"*",
  element:<Unable></Unable>
}
  ]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <HelmetProvider>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
    </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
