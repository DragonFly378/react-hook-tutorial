import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  const print = () => {
    setX(x + 1);
    // console.log("halo dunia " + x);
  };

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);
    // print();
  }, []);

  return (
    <div>
      Hooks X -{x} Y - {y}
      <button onClick={print}>klik</button>
    </div>
  );
};

export default HookMouse;
