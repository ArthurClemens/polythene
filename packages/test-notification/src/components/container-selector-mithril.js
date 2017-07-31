import { renderer as h, Notification } from "polythene-mithril";

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
        h(Spawn1, { key: "one" }),
        h("#notifs1",
          {
            // key: "two",
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
        h(Spawn2, { key: "three" }),
        h("#notifs2",
          {
            // key: "four",
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
