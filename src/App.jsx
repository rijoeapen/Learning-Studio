import { useState } from "react";
import "./App.css";
import "./components/Forms.css";
import Title from "./components/Title";

function App() {
  const [hide, setHide] = useState(false);
  return (
    <>
      {!hide && <Title />}
      <button onClick={() => setHide(!hide)}>Click Me</button>
    </>
  );
}

export default App;
