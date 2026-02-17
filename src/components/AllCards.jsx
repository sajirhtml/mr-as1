import React, { use } from 'react';
import Card from '../components/Card'
const allProdPromise = fetch("https://fakestoreapi.com/products").then(res => res.json());

const AllCards = () => {
    const allProds = use(allProdPromise);

    return (
        <div>
            {
                allProds.map(prod => <Card key={prod.id} prod={prod}/>)
            }
        </div>
    );
};

export default AllCards;