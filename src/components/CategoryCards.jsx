import React, { use, useEffect, useState } from "react";
import Card from "./Card";
import { useParams } from "react-router";
const allProdPromise = fetch("https://fakestoreapi.com/products").then((res) =>
  res.json(),
);

const CategoryCards = () => {
  const allProds = use(allProdPromise);
  const { category } = useParams();
  // console.log(allProds, category);
  const [prodCategory, setProdCategory] = useState([]);
  useEffect(() => {
    if (category == "electronics") {
      const elecProds = allProds.filter((prods) => prods.category == category);
      setProdCategory(elecProds);
    } else if (category == "jewelery") {
      const jeweleryProds = allProds.filter(
        (prods) => prods.category == category,
      );
      setProdCategory(jeweleryProds);
    } else if (category == "men's clothing") {
      const mensProds = allProds.filter((prods) => prods.category == category);
      setProdCategory(mensProds);
    } else if (category == "women's clothing") {
      const womensProds = allProds.filter(
        (prods) => prods.category == category,
      );
      setProdCategory(womensProds);
    }
  }, [category, allProds]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
      {prodCategory.map((prod) => (
        <Card key={prod.id} prod={prod} />
      ))}
    </div>
  );
};

export default CategoryCards;
