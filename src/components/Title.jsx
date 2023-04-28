import { useEffect, useState } from "react";

const Title = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval running...");
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h1>Welcome Back!</h1>;
};
export default Title;
