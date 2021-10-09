import { ADD, DELETE, INCREMENT, DECREMENT } from "../actions/ActionTypes";
export const cartReducer = (state = [], action) => {
  if (action.type === ADD) {
    let present = state.find((o) => o.id === action.payload.data.id);
    if (!present) {
      const item = {
        ...action.payload.data,
        count: 1,
      };

      state = [...state, item];
    }
    return state;
  } else if (action.type === DELETE) {
    state = state.filter((i) => i.id !== action.payload.data.id);
    return state;
  } else if (action.type === INCREMENT) {
    state = state.map((i) => {
      return i.id === action.payload.data.id
        ? {
            ...i,
            count: i.count + 1,
          }
        : i;
    });
    return state;
  } else if (action.type === DECREMENT) {
    state = state.map((i) => {
      return i.id === action.payload.data.id ? { ...i, count: i.count - 1 } : i;
    });
    return state;
  }

  return state;
};
