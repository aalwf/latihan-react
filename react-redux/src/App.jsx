// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./features/Counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button aria-label="=" onClick={() => dispatch(decrement())}>
          -
        </button>
        <span>{count}</span>
        <button aria-label="+" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
