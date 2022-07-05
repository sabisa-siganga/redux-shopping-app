import React from "react";
import Item from "../Item/Item";
import "./Products.scss";

const Products = () => {
  const data = [
    {
      image: "https://picsum.photos/536/354.jpg?random=1",
      title: "This is the Beautiful landscape Ever!!!",
      description:
        "This is a cool cube that can help you kill boredom at all times.",
      price: "$ 15",
    },

    {
      image: "https://picsum.photos/536/354.jpg?random=1",
      title: "This is the greatest ball of all",
      description: "This ball helps people to have fun all the time.",
      price: "$ 20",
    },
  ];
  return (
    <div className="products">
      {data.map((product, index) => {
        return (
          <Item
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        );
      })}
      ;
    </div>
  );
};

export default Products;
