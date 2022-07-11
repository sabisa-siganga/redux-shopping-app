import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/slices/cart";
import "./Item.scss";

interface Props {
  image: string;
  title: string;
  description: string;
  price: string;
}

const Item = (props: Props) => {
  const { image, title, description, price } = props;
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(
      addToCart({
        image: image,
        title: title,
        description: description,
        price: price,
      })
    );
  };

  return (
    <div className="single-item">
      <div className="single-item-image">
        <img src={image} alt="" />
      </div>

      <div className="paraphs">
        <h4>{title}</h4>
        <p>{description}</p>
        <span>{price}</span>
      </div>
      <div className="buttons">
        <button className="view">View Item</button>
        <button onClick={onClick}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Item;
