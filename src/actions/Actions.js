import { ADD, DELETE, GET_DATA, INCREMENT, DECREMENT } from "./ActionTypes";

export const addItem = (data) => {
  return {
    type: ADD,
    payload: {
      data,
    },
  };
};

export const removeFromCart = (data) => {
  return {
    type: DELETE,
    payload: {
      data,
    },
  };
};

//Actions for fetching data from endpoint

export const getData = () => {
  return {
    type: GET_DATA,
  };
};

export const incrementQuantity = (data) => {
  return {
    type: INCREMENT,
    payload: {
      data,
    },
  };
};

export const decrementQuantity = (data) => {
  return {
    type: DECREMENT,
    payload: {
      data,
    },
  };
};
