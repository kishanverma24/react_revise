import React, { memo, useMemo, useState } from "react";

const SmallComponent = ({ count }) => {
  let multiply = useMemo(() => {
    let a = 0;
    for (let index = 0; index <= 1000000000; index++) {
      a += index;
    }
    return a;
  }, []);

  return (
    <div>
      <h2>{multiply}</h2>
      <h2>{count}</h2>
    </div>
  );
};

export default memo(SmallComponent);
