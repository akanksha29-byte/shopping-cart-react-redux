import React from "react";
import { Button } from "react-bootstrap";

const CheckOut = ({ item }) => {
  let final = 0;
  let original = 0;
  return (
    <>
      <table className="w-100">
        <tbody>
          {item.map((i, index) => {
            let currTotal = i.count * i.final_price;
            final += currTotal;
            original += i.original_price
              ? i.count * (i.original_price - i.final_price)
              : 0;

            return (
              <tr key={i.id + index}>
                <td>{`${i.count} x $${i.final_price}.00`}</td>
                <td>{`$${currTotal}.00`}</td>
              </tr>
            );
          })}

          <tr>
            <td>Total Saving</td>
            <td>{`${original}.00`}</td>
          </tr>
          <tr>
            <td>Delivery Fees</td>
            <td>{`$9.00`}</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>{`${final + 9}.00`}</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <Button className="w-100 mt-3" variant="primary" id="button-addon1">
        Pay
      </Button>
    </>
  );
};

export default CheckOut;
