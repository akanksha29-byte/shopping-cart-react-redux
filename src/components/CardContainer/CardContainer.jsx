import React from "react";
import Cards from "./Cards/Cards";
import "./CardContainer.css";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const products = useSelector((store) => store.products);

  return (
    <div className="card_container w-75">
      {products.map((product) => {
        return <Cards key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardContainer;
