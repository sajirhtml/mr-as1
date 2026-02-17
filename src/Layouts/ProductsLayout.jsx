import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import { Outlet, useParams } from "react-router";
import AllCards from "../components/AllCards";

const ProductsLayout = () => {
  const { category } = useParams();
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section>
        <Categories></Categories>
      </section>
      <section className="mx-3 lg:mx-15">
        {category === undefined ? <AllCards /> : <Outlet />}
        </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ProductsLayout;
