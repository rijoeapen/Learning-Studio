import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((curr) => {
      if (curr < 10) {
        return (curr += 1);
      }
      return curr;
    });
  };

  const onDecrement = () => {
    setCount((curr) => {
      if (curr > 0) {
        return (curr -= 1);
      }
      return curr;
    });
  };

  return (
    <div className="App">
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
}

export default App;
