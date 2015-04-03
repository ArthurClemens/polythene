module.exports = { 
  ".header-panel": {
    "display": "block",
    "position": "relative",
    "height": "100%"
  },
  ".header-panel .outerContainer": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  ".header-panel .mainPanel": {
    "position": "relative"
  },
  ".header-panel .mainContainer": {
    "position": "relative",
    "overflow-y": "auto",
    "overflow-x": "hidden",
    "-webkit-overflow-scrolling": "touch"
  },
  ".header-panel .header": {
    "white-space": "nowrap",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  ".header-panel .dropShadow": {
    "position": "absolute",
    "top": "0",
    "left": "0",
    "right": "0",
    "height": "6px",
    "box-shadow": "inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)"
  },
  ".header-panel .dropShadow.hidden": {
    "display": "none"
  },
  ".header-panel[mode=seamed] .dropShadow": {
    "display": "none"
  },
  ".header-panel[mode=scroll] .mainContainer": {
    "overflow": "visible"
  },
  ".header-panel[mode=scroll] .outerContainer": {
    "overflow-y": "auto",
    "overflow-x": "hidden",
    "-webkit-overflow-scrolling": "touch"
  },
  ".header-panel[mode=cover] .mainPanel": {
    "position": "static"
  },
  ".header-panel[mode=cover] .mainContainer": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  ".header-panel[mode=cover] .dropShadow": {
    "position": "static",
    "width": "100%"
  }
};
