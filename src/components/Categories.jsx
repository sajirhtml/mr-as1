import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoryPromise = fetch("https://fakestoreapi.com/products/categories").then(res=>res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    return (
        <div className='text-center '>
            <h1 className='text-3xl my-5 font-semibold'>Our Products</h1>
            <div className='flex flex-wrap justify-center items-center gap-2 my-5'>
                <NavLink className='btn btn-ghost btn-outline rounded-4xl'>All</NavLink>
                {
                    categories.map(category =>(
                        <NavLink className='btn btn-ghost btn-outline rounded-4xl' to={`/products/${category}`}>{category}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;