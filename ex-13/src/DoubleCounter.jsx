import { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT_A":
      return { ...state, counterA: state.counterA + 1 };

    case "DECREMENT_A":
      return { ...state, counterA: state.counterA - 1 };

    case "INCREMENT_B":
      return { ...state, counterB: state.counterB + 1 };

    case "DECREMENT_B":
      return { ...state, counterB: state.counterB - 1 };

    case "RESET_ALL":
      return initialState;

    default:
      return state;
  }
}

const btnStyle = {
  margin: "5px",
  padding: "8px 14px",
  cursor: "pointer"
};

const DoubleCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Counter A: {state.counterA}</h2>
      <button style={btnStyle} onClick={() => dispatch({ type: "DECREMENT_A" })}>
        Decrement A
      </button>
      <button style={btnStyle} onClick={() => dispatch({ type: "INCREMENT_A" })}>
        Increment A
      </button>

      <h2>Counter B: {state.counterB}</h2>
      <button style={btnStyle} onClick={() => dispatch({ type: "DECREMENT_B" })}>
        Decrement B
      </button>
      <button style={btnStyle} onClick={() => dispatch({ type: "INCREMENT_B" })}>
        Increment B
      </button>

      <br /><br />
      <button style={btnStyle} onClick={() => dispatch({ type: "RESET_ALL" })}>
        Reset Both
      </button>
    </div>
  );
};

export default DoubleCounter;
