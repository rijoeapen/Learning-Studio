import { useState } from "react";
import "./Faq.css";
const FaqHeader = () => {
  return (
    <>
      <header>
        <div className="image"></div>
        <h1>FAQ</h1>
      </header>
    </>
  );
};

const Faq = ({ content, setContent }) => {
  const expandFn = (index) => {
    setContent((items) =>
      items.map((item, i) => {
        if (i === index) {
          return { ...item, active: true };
        } else if (i !== index && item.active) {
          return { ...item, active: false };
        } else {
          return item;
        }
      })
    );
  };

  const collapseFn = (index) => {
    setContent((items) =>
      items.map((item, i) => {
        if (i === index) {
          return { ...item, active: false };
        }
        return item;
      })
    );
  };
  return (
    <>
      <FaqHeader />
      <section className="accordion">
        {content.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`item ${item.active ? "open-border" : ""}`}
            >
              <p className={`number ${item.active ? "open" : ""}`}>
                {index + 1}
              </p>
              <p className={`title ${item.active ? "open" : ""}`}>
                {item.title}
              </p>
              {!item.active && (
                <ion-icon
                  name="add-circle-outline"
                  onClick={() => expandFn(index)}
                ></ion-icon>
              )}
              {item.active && (
                <>
                  <ion-icon
                    name="remove-circle-outline"
                    onClick={() => collapseFn(index)}
                  ></ion-icon>
                  <div
                    className={`content `}
                    style={{ wordBreak: "break-word" }}
                  >
                    <p>{item.content}</p>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Faq;
