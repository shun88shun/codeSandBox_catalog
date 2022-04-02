import React from "react";

var start: number;
var time: number;

export const AppTest = (props: any) => {
  React.useLayoutEffect(() => {
    time = performance.now() - start;
  });

  return (
    <React.Fragment>
      <button
        onClick={() => {
          start = performance.now();
        }}
      >
        計測
      </button>
      <div>{props.children}</div>
      <div>計測時間：{start}</div>
    </React.Fragment>
  );
};
