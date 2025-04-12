import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import { HeadingComponent } from "./Components/headingcomponent";
import { BodyComponent } from "./Components/bodycomponent";
import { AboutComponent } from "./Components/aboutComponent";
import {ErrorComponent} from "./Components/errorComponent";
import { ContactusComponent } from "./Components/ContactusComponent";


function ApplayOut() {
  //console.log("applayout renders");
  return (
    <div className="app">
      <HeadingComponent />
      <Outlet />
      {/**<BodyComponent /> */}
    </div>
  );
}

//console.log(HeadingComponent());

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<ApplayOut />,
    children:[
      {
        path:"/",
        element:< BodyComponent />,
      },
      {
        path:"/about",
        element:< AboutComponent />,
      },
      {
        path:"/contact",
        element:< ContactusComponent />,
      }
    ],
    errorElement:<ErrorComponent />,
  },
  // {
  //   path:"/about",
  //   element:< AboutComponent />,
  // },
  // {
  //   path:"/contact",
  //   element:< ContactUsComponent />,
  // }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
// root.render(
// <div className="app">
//   <HeadingComponent />
//   <BodyComponent />
//   </div>
// );
