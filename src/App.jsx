import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    if (count >= 0 && count < 10) {
      setCount((curr) => (curr += 1));
    }
  };
  const onDecrement = () => {
    if (count > 0) {
      setCount((curr) => (curr -= 1));
    }
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
