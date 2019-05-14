import { DialogCSS } from "polythene-css";
import { Dialog, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";

DialogCSS.addStyle(".dialog-tests-static", {
  position: "static",
});

const spawnBlock = spawnId => h("div",
  {
    className: "dialog-row",
    style: {
      background: "#ddd",
      display: "flex",
      margin: "10px 0 20px 0",
      width: "100%",
      height: "200px"
    }
  },
  h(Dialog, { spawn: spawnId })
);

const createOpener = ({ title, spawn, id }) => 
  h(Button, {
    raised: true,
    key: title,
    label: title,
    events: {
      [a.onclick]: () => Dialog.show({
        key: title,
        title, 
        body: h(Button, {
          raised: true,
          label: "Close",
          events: {
            [a.onclick]: () => Dialog.hide({ spawn, id })
          }
        }),
        className: "dialog-tests-static",
      },
      { spawn, id }
      )
    }
  });

export default {
  view: () => { 
    return [
      h(".pe-button-row", [
        createOpener({
          title: "spawn 1, id 1",
          spawn: "spawn-1",
          id: "id-1"
        }),
        createOpener({
          title: "spawn 1, id 2",
          spawn: "spawn-1",
          id: "id-2",
        })
      ]),
      spawnBlock("spawn-1"),
      h(".pe-button-row", [
        createOpener({
          title: "spawn 2, id 3",
          spawn: "spawn-2",
          id: "id-3",
        }),
        createOpener({
          title: "spawn 2, id 4",
          spawn: "spawn-2",
          id: "id-4",
        })
      ]),
      spawnBlock("spawn-2")
    ];
  }
};
