import m from "mithril";
import { Dialog, Button } from "polythene-mithril";
import { addLayoutStyles, addTypography } from "polythene-css";

addLayoutStyles();
addTypography();

const App = {
  view: () =>
    m("div", [
      m(Button, {
        // raised: true,
        label: "Open dialog",
        events: {
          onclick: () => {
            Dialog.show({
              /* note the Dialog component is below the other elements in the app */
              title: "Hello",
              body: "Click background to hide or press ESCAPE.",
              backdrop: true
            });
          }
        }
      }),
      m(Dialog)
    ])
};

m.mount(document.body, App);
