import React from "react";
import { Card } from "react-bootstrap";
import InputButton from "./InputButton";

const Cards = ({ product }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={product.img_url} />
      <Card.Body>
        <div className="d-flex justify-content-between ">
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.original_price && (
              <strike
                style={{ color: "grey" }}
              >{`$${product.original_price}`}</strike>
            )}
            <strong> {`$${product.final_price}`}</strong>
          </Card.Text>
        </div>

        <Card.Text className="card-desc">{product.description}</Card.Text>
        <InputButton id={product.id} product={product} />
      </Card.Body>
    </Card>
  );
};

export default Cards;
