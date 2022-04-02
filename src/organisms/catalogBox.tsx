import React from "react";
import { AppTest } from "./../pages/home";

export const CatalogBox = (props: any) => {
  const { componentNo, componentName } = props;
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
        Component No.{componentNo} <br />
        Component Name: {componentName} <br />
        <AppTest>{props.children}</AppTest>
      </div>
    </>
  );
};
