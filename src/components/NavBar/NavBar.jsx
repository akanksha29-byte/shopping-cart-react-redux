import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const cartItems = useSelector((store) => store.cartItems);
  return (
    <Navbar variant="dark">
      <Container>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <Navbar.Brand>
            <img
              className="me-2"
              src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
              alt="site-logo"
            />
            <Navbar.Text className="text-primary">Happy</Navbar.Text>
          </Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Link
            to="/cart"
            style={{ color: "grey", textDecoration: "none", fontSize: "20px" }}
          >
            <span className="cart-badge">
              <i className="fas fa-shopping-cart"></i>
              <i className="cart-badge-item">{cartItems.length}</i>
            </span>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
