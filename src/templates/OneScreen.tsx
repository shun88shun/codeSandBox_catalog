import React from "react";
import { Button } from "./../atoms/Button";

export const OneScreen = () => {
  const box = {
    padding: "0.5em 1em",
    margin: "2em 0",
    fontWeight: "bold",
    color: "#6091d3" /*文字色*/,
    background: "#FFF",
    border: "solid 3px #6091d3" /*線*/,
    borderRadius: "10px" /*角の丸み*/
  };

  return (
    <>
      <div style={box}>
        component No：1 <br />
        component name：button
        <br />
        usage:
        <div>
          <Button text="test" />
        </div>
      </div>
      <Button text="test" />
      <Button text="TEST" />
      <Button text="TEST" />
      <Button text="TEST" />
      <Button text="TEST" />
    </>
  );
};
