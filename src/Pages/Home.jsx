import React, { useState } from "react";

export const Home = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <>
      <p className="number-test" style={{ color: "white" }}>
        {count}
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};
