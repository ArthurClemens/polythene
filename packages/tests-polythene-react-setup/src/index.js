import React from "react";
import ReactDOM from "react-dom";
import { Dialog, Button } from "polythene-react";
// import { SVG } from "polythene-react-svg";

import "polythene-css/dist/polythene.css";            // Component CSS
import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font

// const iconSVG = <svg width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>;

const App = () => (
  <React.Fragment>
    <Button
      raised
      label="Open dialog"
      events={{
        onClick: () => Dialog.show({
          /* note the Dialog component is below the other elements in the app */
          title: "Hello",
          body: "Click outside to close, or press ESCAPE",
          backdrop: true
        })
      }}
    />
    {/* <SVG
      content={iconSVG}
    /> */}
    <Dialog />
  </React.Fragment>
);

const mountNode = document.querySelector("#app");
ReactDOM.render(<App />, mountNode);
