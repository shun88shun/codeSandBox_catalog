import React from "react";
import { CatalogBox } from "./../organisms/catalogBox";
import { Button } from "./../atoms/Button";

export const Catalog = () => {
  const allground = {
    color: "red",
    background: "black",
    fontSize: "20px",
    fontFamily: "serif",
    padding: "50px"
  };

  return (
    <>
      <div style={allground}>
        <div>カタログ</div>
        <CatalogBox componentNo="1" componentName="Button">
          {<Button text="test" />}
        </CatalogBox>
        <CatalogBox componentNo="2" componentName="Button2">
          {<Button text="test" />}
        </CatalogBox>
        <CatalogBox componentNo="3" componentName="Button3">
          {<Button text="test" />}
        </CatalogBox>
      </div>
    </>
  );
};
