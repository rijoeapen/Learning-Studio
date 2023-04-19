import "./Counter.css";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <>
      <h1>Count is {count}</h1>
      <div className="button-grp">
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </>
  );
};

export default Counter;
