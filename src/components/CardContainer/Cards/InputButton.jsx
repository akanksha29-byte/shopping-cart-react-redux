import { Button, InputGroup, FormControl } from "react-bootstrap";
import React, { useState } from "react";
import {
  incrementQuantity,
  decrementQuantity,
  addItem,
} from "../../../actions/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const InputButton = ({ product }) => {
  const dispatch = useDispatch();
  const [addToCart, setAddToCart] = useState(false);
  const [count, setCount] = useState(0);
  const cartItems = useSelector((store) => store.cartItems);

  const handleIncrement = () => {
    dispatch(incrementQuantity(product));
    setCount(count + 1);
  };

  const handleAddItem = () => {
    setCount(count + 1);
    setAddToCart(true);
    dispatch(addItem(product));
  };

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrementQuantity(product));
      setCount(count - 1);
    }
  };

  if (!addToCart || count === 0) {
    const present = cartItems.find((item) => item.id === product.id);
    if (present) {
      var { id } = present;
    }

    return (
      <Button
        className="w-100"
        variant="outline-primary"
        onClick={handleAddItem}
        disabled={id ? true : false}
      >
        Add to Cart
      </Button>
    );
  }

  return (
    <InputGroup className="mb-3">
      <Button variant="primary" id="button-addon1" onClick={handleIncrement}>
        +
      </Button>
      <FormControl
        aria-label="Example text with button addon"
        aria-describedby="basic-addon1"
        placeholder={count}
        style={{ textAlign: "center" }}
      />
      <Button
        variant="primary"
        id="button-addon1"
        onClick={handleDecrement}
        disabled={count === 0 ? true : false}
      >
        -
      </Button>
    </InputGroup>
  );
};

export default InputButton;
