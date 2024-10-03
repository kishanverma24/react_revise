import React, { useMemo, useState } from "react";

const App = () => {
  const [add, setAdd] = useState(0); // because in the beginning the value of the state is set to be an empty string
  const [minus, setMinus] = useState(100);
  

  const multiplication = useMemo(
    function multiply() {
      console.log("Multiply function called!");
      return add * 10;
    },
    [add]
  ); // this useMemo will make sure that the value of the multiply function is called once and be memoised after that and do not calls itself until and unleash the dependency array's value is changed

  return (
    <div>
      <h1>Learning useMemo</h1>
      <h5>Multiply Value: {multiplication}</h5>
      <span>Addition Value: {add}</span> <br /> <br />
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition
      </button>{" "}
      <br /> <br />
      <span>Minus value: {minus}</span> <br /> <br />
      <button
        onClick={() => {
          setMinus(minus - 1);
        }}
      >
        Substraction
      </button>
    </div>
  );
};

export default App;
