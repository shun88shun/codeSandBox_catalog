import React from "react";


type typeButton = { text: string };

export const Button = (props: typeButton) => {
  const { text } = props;

  const buttonStyle = {
    color: "white",
    background: "black",
    padding: "0",
    margin: "0",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  };

  return (
    <>
      <button style={buttonStyle}>{text}</button>

      {/* <form>
        <input list="flower" />
        <datalist id="flower">
          <option value="rose"></option>
          <option value="cherry blossom"></option>
          <option value="sunflower"></option>
        </datalist>
      </form> */}
    </>
  );
};
