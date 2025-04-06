import React from "react";
import ReactDOM from "react-dom/client";

import { HeadingComponent } from "./Components/headingcomponent";
import { BodyComponent } from "./Components/bodycomponent";

const ApplayOut = () => {
  return (
    <div className="app">
      <HeadingComponent />
      {BodyComponent()}
    </div>
  );
};

//console.log(HeadingComponent());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplayOut />);
