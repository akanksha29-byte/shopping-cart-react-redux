import React from "react";
import "./ShoppingCart.css";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import CheckOut from "./CheckOut";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const cartItems = useSelector((store) => store.cartItems);

  return (
    <div className="d-flex justify-content-between align-items-center w-75">
      <table className="w-50">
        <thead>
          <tr>
            <td>S.no</td>
            <td>ITEMS</td>
            <td>QTY</td>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} index={index + 1} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <Link
                to="/"
                className="text-primary"
                style={{ textDecoration: "none" }}
              >
                <i className="fas fa-plus me-2"></i>
                add items
              </Link>
            </td>
          </tr>
        </tfoot>
      </table>
      {cartItems.length !== 0 && (
        <section className="w-50 checkout_container">
          <CheckOut item={cartItems} />
        </section>
      )}
    </div>
  );
};

export default ShoppingCart;
