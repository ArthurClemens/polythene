export default [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
    // remove tap highlight in mobile Safari
    {
      "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
    }, {
      "-webkit-tap-highlight-color": "transparent" // For some Androids
    }
  ],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, *:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];