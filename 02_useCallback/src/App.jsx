import React, { useCallback, useState } from "react";
import ChildA from "./components/ChildA";

const App = () => {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  // const Learning = () => {
  //   console.log("Hellog");
  // }; // by this whenever there is change in the variablees of the app component it is going to be recreated by the react app so this will call the thing atleast once or when the component rerenders.

  const Learning = useCallback(() => {
    console.log("Hellog from child component");
  }, [count]); // this useCallback will make sure that whenever the variable is changing with time then the function donot creates itself again and again until and unleash there is change in the count variable whuch is the dependency array variale of useCallback
  
  return (
    <div>
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} count={count} />
      <h1>{add}</h1>
      <button
        onClick={() => {
          setAdd(add + 1);
        }}
      >
        Addition
      </button>{" "}
      <br />
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default App;
