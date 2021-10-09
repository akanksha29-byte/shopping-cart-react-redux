import { GET_DATA } from "../actions/ActionTypes";
import { data } from "../data/data";

export const productReducer = (state = [...data], action) => {
  if (action.type === GET_DATA) {
    return state;
  }
  return state;
};
