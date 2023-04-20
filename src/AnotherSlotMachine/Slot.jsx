import React, { useEffect } from "react";
import SlotMachine from "jquery-slotmachine/dist/slotmachine.js";
import "./style.css";

const Slot = () => {
  useEffect(() => {
    // Shuffle();
  }, []);

  function Shuffle() {
    const el = document.querySelector("#machine");

    const machine = new SlotMachine(el, {
      //   active: 1,
      delay: 450,
      active: 2,
      direction: "up",
    });

    machine.shuffle(Infinity);
  }

  return (
    <>
      <div id="machine">
        <div>Madrid</div>
        <div>London</div>
        <div>New York</div>
        <div>New York</div>
        <div>New York</div>
      </div>
      <button onClick={Shuffle}>Click</button>
    </>
  );
};

export default Slot;
