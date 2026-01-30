import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import MinimalLayout from "./Components/Layout/MiniLaout";
import Customerdetails from './Pages/Customerdetails'


export const route = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>
                },
                {
                    path: 'product/',
                    element: <ProductDetails/>
                }
            ]
            
        },
        {
            path: '/',
            element: <MinimalLayout/>,
            children: [
                {
                    path: 'customer-details/',
                    element: <Customerdetails/>
                }
            ]
        }
    ]
)


