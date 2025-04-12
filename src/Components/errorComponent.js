
import {errorstyles} from "../Style/errorStyle";
import { useRouteError } from "react-router-dom";

export const ErrorComponent = () => {
  const error = useRouteError();
  //console.error(error);
  return (
    <div style={errorstyles.container}>
      <h1 style={errorstyles.heading}>{error.status}</h1>
      <h2 style={errorstyles.message}>{error.statusText}</h2>
      <p style={errorstyles.message}>{error.error.message}</p>
      <a href="/" style={errorstyles.link}>Go Back to Home</a>
    </div>
  );
};

