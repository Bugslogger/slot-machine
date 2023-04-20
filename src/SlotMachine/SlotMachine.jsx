import React from "react";
import { SlotMachine } from "../lot";
import "./style.css";

const SlotMachineComp = () => {
  React.useEffect(() => {
    // const randomizeButton = document.querySelector("#randomizeButton");
    // const slotMachineResults = [
    //   document.querySelector("#machine0Result"),
    //   document.querySelector("#machine1Result"),
    //   document.querySelector("#machine2Result"),
    // ];
    // const slotMachineContainers = [
    //   document.querySelector("#machine0"),
    //   document.querySelector("#machine1"),
    //   document.querySelector("#machine2"),
    // ];
    // const slotMachines = slotMachineContainers.map(
    //   (element, index) => new SlotMachine(element, { active: index })
    // );

    // function onComplete() {
    //   const index = this.element.id.replace(/[a-z]/g, "");

    //   slotMachineResults[index].innerText = `Index: ${this.active}`;
    // }

    // randomizeButton.addEventListener("click", () => {
    //   slotMachines[0].shuffle(5, onComplete);
    //   setTimeout(() => slotMachines[1].shuffle(5, onComplete), 500);
    //   setTimeout(() => slotMachines[2].shuffle(5, onComplete), 1000);
    // });

    // Slot Machine
    let count = 0;
    const shuffleButton = document.querySelector("#casinoShuffle");
    const stopButton = document.querySelector("#casinoStop");
    const casino1Element = document.querySelector("#casino1");
    const casino2Element = document.querySelector("#casino2");
    const casino3Element = document.querySelector("#casino3");
    const casino1 = new SlotMachine(casino1Element, {
      active: 0,
      delay: 500,
      direction: "up",
    });
    const casino2 = new SlotMachine(casino2Element, {
      active: 1,
      delay: 500,
    });
    const casino3 = new SlotMachine(casino3Element, {
      active: 2,
      delay: 500,
      direction: "up",
    });

    shuffleButton.addEventListener("click", () => {
      count = 3;
      casino1.shuffle(Infinity);
      casino2.shuffle(Infinity);
      casino3.shuffle(Infinity);
    });

    stopButton.addEventListener("click", () => {
      switch (count) {
        case 3:
          casino1.stop(2);
          break;
        case 2:
          casino2.stop(3);
          break;
        case 1:
          casino3.stop(4);
          break;
      }
      count--;
    });
  }, []);

  return (
    <div>
      <div id="casino" style={{ paddingTop: "50px" }}>
        <div className="content">
          <h1>Use the API</h1>

          <div>
            <div
              id="casino1"
              className="slotMachine"
              style={{ marginLeft: "-65px" }}
            >
              <div className="slot slot1"></div>
              <div className="slot slot2"></div>
              <div className="slot slot3"></div>
              <div className="slot slot4"></div>
              <div className="slot slot5"></div>
              <div className="slot slot6"></div>
            </div>

            <div id="casino2" className="slotMachine">
              <div className="slot slot1"></div>
              <div className="slot slot2"></div>
              <div className="slot slot3"></div>
              <div className="slot slot4"></div>
              <div className="slot slot5"></div>
              <div className="slot slot6"></div>
            </div>

            <div id="casino3" className="slotMachine">
              <div className="slot slot1"></div>
              <div className="slot slot2"></div>
              <div className="slot slot3"></div>
              <div className="slot slot4"></div>
              <div className="slot slot5"></div>
              <div className="slot slot6"></div>
            </div>

            <div className="btn-group btn-group-justified" role="group">
              <button
                id="casinoShuffle"
                type="button"
                className="btn btn-primary btn-lg"
              >
                Shuffle!
              </button>
              <button
                id="casinoStop"
                type="button"
                className="btn btn-primary btn-lg"
              >
                Stop!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlotMachineComp;
