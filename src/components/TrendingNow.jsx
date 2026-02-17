import React, { use } from 'react';
import Card from './Card';

const productsPromise = fetch('https://fakestoreapi.com/products').then(res => res.json());

const TrendingNow = () => {
  const products = use(productsPromise);
  const topThree = (products || []).slice(0, 3);

  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-indigo-600">Trending Now</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topThree.map(prod => (
            <Card key={prod.id} prod={prod} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
