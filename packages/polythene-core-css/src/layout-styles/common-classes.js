export default [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  
  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  },

  ".pe-rtl": {
    direction: "rtl",
  },

  // flip directional icon if needed
  "*[dir=rtl], .pe-rtl ": {
    " .pe-rtl--flip": {
      transform: "scaleX(-1)"
    }
  }
}];
