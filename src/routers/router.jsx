import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../Layouts/HomeLayout';
import ProductsLayout from '../Layouts/ProductsLayout';
import CategoryCards from '../components/categoryCards';
import ErrorPage from '../Pages/ErrorPage';
import AboutPage from '../Pages/AboutPage';
import ContactPage from '../Pages/ContactPage';

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
    },
    {
        path: "/about",
        Component: AboutPage,
    },
    {
        path: "/contact",
        Component: ContactPage,
    },
    {
        path:'*',
        Component: ErrorPage,
    }
])
export default router;