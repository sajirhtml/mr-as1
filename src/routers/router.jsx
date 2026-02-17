import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import ProductsLayout from '../Layouts/ProductsLayout';
import Loading from '../components/Loading';
import CategoryCards from '../components/categoryCards'

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
    },
    {
        path: "/products",
        Component: ProductsLayout,
        children:[
            {
                path: "/products/:category",
                Component: CategoryCards,
            }
        ]
    }
])
export default router;