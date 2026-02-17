import React, { use } from 'react';
import Card from '../components/Card'
const allProdPromise = fetch("https://fakestoreapi.com/products").then(res => res.json());

const AllCards = () => {
    const allProds = use(allProdPromise);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
            {
                allProds.map(prod => <Card key={prod.id} prod={prod}/>)
            }
        </div>
    );
};

export default AllCards;