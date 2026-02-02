import { createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";
import MinimalLayout from "./Components/Layout/MiniLaout";
import CustomerDetails from "./Pages/Customerdetails";
import PaymentForm from "./Components/PaymentForm";
import Paysucessmodel from "./Pages/Paysucessmodel";



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
                    element: <CustomerDetails/>
                },
                {
                    path: 'payment-form/',
                    element: <PaymentForm/>
                },
                {
                    path: 'payment-success/',
                    element: <Paysucessmodel/>
                }
            ]
        }
    ]
)


