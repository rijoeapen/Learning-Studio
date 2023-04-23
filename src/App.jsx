import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Faq from "./components/Faq";

function App() {
  const [content, setContent] = useState([
    {
      title: "Can I cancel my subscription at anytime?",
      content:
        "Sure. Your paid subscription can be cancelled anytime by shifting to Lite plan.",
      active: false,
      id: 1,
    },
    {
      title: "Can I change my plan later on?",
      content:
        "Absolutely! You can upgrade or downgrade your plan anytime. The money paid for the previous subscription will be recalculated to the new plan.",
      active: false,
      id: 2,
    },
    {
      title: "Will you renew my subscription automatically?",
      content:
        "Yes, your subscription will be automatically renewed according to your pay period.",
      active: false,
      id: 3,
    },
    {
      title: "Do you offer any discounts?",
      content:
        "Yes! We offer 17% discount for payment per year. There may be other temporary discounts, check for this inside the service.",
      active: false,
      id: 4,
    },
    {
      title: "Can I request a refund?",
      content:
        "Sure, you will be welcome to request your refund within 14 days of subscribing to any paid plan.",
      active: false,
      id: 5,
    },
  ]);

  return (
    <div className="App">
      <Faq content={content} setContent={setContent} />
    </div>
  );
}

export default App;
