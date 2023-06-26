import React from "react";

function ReactRun() {
  React.useEffect(() => {
    console.log("Third run...")
  }, []);

  React.useLayoutEffect(() => {
    console.log("Second run...");
  }, []);

  console.log("First run...")

  return <div>ReactRun</div>
}

export default ReactRun;