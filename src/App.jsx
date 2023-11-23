import { useState } from "react";
const INITIAL_VALUE = ["A", "B", "C"];

function App() {
  const [array, Setarray] = useState(INITIAL_VALUE);
  const [value, setvalue] = useState("");

  function RemoveFirstElement() {
    Setarray((currentarray) => {
      return currentarray.slice(1);
    });
  }

  function RemoveSpecifLetter(letter) {
    Setarray((currentarray) => {
      return currentarray.filter((element) => element !== letter);
    });
  }

  function AddtoStart(letter) {
    Setarray((currentarray) => {
      return [letter, ...currentarray];
    });
  }
  function AddtoEnd(letter) {
    Setarray((currentarray) => {
      return [...currentarray, letter];
    });
  }

  function reset() {
    Setarray(INITIAL_VALUE);
  }

  function clear() {
    Setarray([]);
  }
  function Update() {
    return Setarray((currentarray) => {
      return currentarray.map((element) => {
        if (element === "A") return "H";
        return element;
      });
    });
  }

  function updateinput(letter) {
    Setarray((currentarray) => {
      return [...currentarray, letter];
    });
  }

  function AddlettertoIndex(letter, index) {
    Setarray((currentarray) => {
      return [
        ...currentarray.slice(0, index),
        letter,
        ...currentarray.slice(index),
      ];
    });
  }

  return (
    <>
      <button onClick={RemoveFirstElement}>Remove 1st element</button>
      <br />
      <button onClick={() => RemoveSpecifLetter("B")}>Remove all B's</button>
      <br />
      <button onClick={() => AddtoStart("A")}>Add to Start</button>
      <br />
      <button onClick={() => AddtoEnd("A")}>Add to end</button>
      <br />
      <button onClick={() => AddlettertoIndex(" Q", 2)}>
        Add letter Q to Index 2
      </button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={Update}>Update A to H</button>
      <br />
      <input value={value} onChange={(e) => setvalue(e.target.value)} />
      <button onClick={() => updateinput(value)}>Update</button>
      <br />
      {array.join(" , ")}
    </>
  );
}

export default App;
