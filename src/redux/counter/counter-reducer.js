const INITIAL_STATE = {
  currentCounter: 0,
};

const CounterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_COUNTER":
      return {
        ...state,
        currentCounter: action.payload,
      };
    default:
      return state;
  }
};

export default CounterReducer;
