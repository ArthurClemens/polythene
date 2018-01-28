
const ipsum = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat. ";

export default ({ show, h, Drawer, didHide, getState, content, backdrop }) =>
  h("div",
    {
      style: {
        display: "flex",
        overflow: "hidden",
        position: "relative",
        marginTop: "20px",
      },
      "data-drawer": backdrop ? "sliding" : ""
    },
    [
      h("nav",
        null,
        h(Drawer, {
          show,
          didHide,
          getState,
          size: 4,
          type: "pushing",
          backdrop,
          backdropTarget: "[data-drawer=sliding]",
          content
        })
      ),
      h("main",
        {
          style: {
            background: "#ffeb3b",
            padding: "1rem",
            flexShrink: 0,
            flexGrow: 0,
            width: "100%",
          }
        },
        ipsum + ipsum
      )
    ]
  );
