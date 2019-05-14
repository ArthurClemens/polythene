import { Notification } from "polythene-mithril";
import { h } from "cyano-mithril";

export default buttonGroup => {

  const Spawn1 = buttonGroup(
    {
      title: "Notification in a container",
      containerSelector: "#notifs1"
    },
    { spawn: "container1" }
  );

  const Spawn2 = buttonGroup(
    {
      title: "Notification in container two",
      containerSelector: "#notifs2",
    },
    { spawn: "container2" }
  );

  return {
    view: () => 
      h("div", [
        h(Spawn1),
        h("#notifs1",
          {
            style: {
              position: "relative",
              height: "180px",
            }
          },
          h(Notification,
            {
              spawn: "container1",
              position: "container"
            }
          )
        ),
        h(Spawn2),
        h("#notifs2",
          {
            style: {
              position: "relative",
              height: "180px",
            }
          },
          h(Notification,
            {
              spawn: "container2",
              position: "container"
            }
          )
        )
      ])
  };
};
