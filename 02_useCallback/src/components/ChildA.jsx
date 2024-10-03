import React, { memo } from "react";

const ChildA = ({ Learning,count }) => {
  console.log("Child Component Called");
  Learning();  
  return <div>ChildA</div>;
};

export default memo(ChildA);
