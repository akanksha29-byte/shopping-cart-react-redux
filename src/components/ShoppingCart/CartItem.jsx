import React, { useEffect } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../actions/Actions";
import { useDispatch } from "react-redux";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = () => {
    if (item.count > 0) {
      dispatch(decrementQuantity(item));
    }
  };

  useEffect(() => {
    if (item.count === 0) {
      dispatch(removeFromCart(item));
    }
  }, [item, dispatch]);

  return (
    <tr>
      <td>{index}</td>
      <td>{item.name}</td>
      <td>
        <InputGroup className="mb-3 w-50" size="sm">
          <Button
            variant="primary"
            id="button-addon1"
            onClick={handleIncrement}
          >
            +
          </Button>
          <FormControl
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            style={{ textAlign: "center" }}
            placeholder={item.count}
          />
          <Button
            variant="primary"
            id="button-addon1"
            onClick={handleDecrement}
          >
            -
          </Button>
        </InputGroup>
      </td>
    </tr>
  );
};

export default CartItem;
