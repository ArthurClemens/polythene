
export default (selector, componentVars) => [{
  [selector]: [
    {
      // position: "relative",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      pointerEvents: "none",

      ".pe-drawer--full-height": {
        height: "100%"
      },

      ".pe-drawer--cover-from-left": {
        " .pe-drawer__panel": {
          position: "absolute",
          top: 0,
          left: "-99999px",
        }
      },

      " .pe-drawer__panel": {
        height: "100%",
        pointerEvents: "all",
      },

      " .pe-drawer__backdrop": {
        position: "absolute",
        top: 0,
        right: "auto",
        bottom: 0,
        left: "-99999px",
        opacity: 0,
        pointerEvents: "none",
      },

      ".pe-drawer--visible": {
        " .pe-drawer__backdrop": {
          left: 0,
          right: 0,
          pointerEvents: "all"
        }
      }
    }
  ]
}];

