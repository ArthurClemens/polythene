import React from "react";
import ReactDOM from "react-dom";

import "polythene-material-design";
import Button from "polythene-react-button";

Button.theme(".tests-button-themed-button", {
  color_light_background: "#2196F3",
  color_dark_background: "#2196F3",
  color_light_text: "#fff"
});

// const h = React.createElement;

ReactDOM.render(
  <div>
    <Button label="Label" events={{ onClick: () => console.log("click")}} />
    <Button label="Label" className="tests-button-themed-button" />
    <Button><span>Child as label</span></Button>
    <Button children={<span>Child as label 2</span>} />
    <Button label="Label" before={<div key='before'>Before</div>} after={<div key='after'>After</div>} />
    <Button label="Class name" className="button-x" />
  </div>,
  document.getElementById("root")
);
