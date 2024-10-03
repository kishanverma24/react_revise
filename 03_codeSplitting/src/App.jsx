import React, { lazy, Suspense, useState } from "react";
const SmallComponent = React.lazy(() => import("../components/SmallComponent"));
const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Making Components Lazy loaded</h1>
      <Suspense fallback={<h4>Loading component....</h4>}>
        <SmallComponent count={count} />
      </Suspense>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
    </div>
  );
};

export default App;
