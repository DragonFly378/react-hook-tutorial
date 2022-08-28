import React, { useEffect, useState } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You click me ${count} times`;
    console.log(count);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
};

export default HookCounterOne;
