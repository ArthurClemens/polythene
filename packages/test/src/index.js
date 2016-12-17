import m from "mithril";
import "polythene-theme";
import {button} from "polythene-button";
import primaryButton from "./primary-button";
// import {shadow} from "polythene-shadow";

var test = m("div", [
  m(button, {
    label: "Default button",
    raised: true,
    wash: true
  }),
  m(primaryButton, {
    label: "Primary button",
    raised: true,
    wash: true
  })
]);

// var test = m("div", m(shadow, {
//   content: m("div", "CONTENT")
// }));

export default test;