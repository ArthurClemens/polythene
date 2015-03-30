module.exports = {
  ".toolbar": {
    "display": "block",
    "position": "relative",
    "box-sizing": "border-box",
    "-moz-box-sizing": "border-box",
    "height": "64px",
    "font-size": "1.3em",
    "background-color": "#CFD8DC"
  },
  ".toolbar.animate": {
    "transition": "height 0.18s ease-in"
  },
  ".toolbar.medium-tall": {
    "height": "128px"
  },
  ".toolbar.tall": {
    "height": "192px"
  },
  ".toolbar .narrow": {
    "height": "56px"
  },
  ".toolbar .narrow .toolbar-tools": {
    "height": "56px",
    "padding": "0"
  },
  ".toolbar .narrow.medium-tall": {
    "height": "112px"
  },
  ".toolbar .narrow.tall": {
    "height": "168px"
  },
  ".toolbar .middleBar": {
    "position": "absolute",
    "top": "0",
    "right": "0",
    "left": "0"
  },
  ".toolbar.tall .middleBar": {
    "-webkit-transform": "translateY(100%)",
    "transform": "translateY(100%)"
  },
  ".toolbar .bottomBar": {
    "position": "absolute",
    "right": "0",
    "bottom": "0",
    "left": "0"
  },
  ".toolbar .header": {
    "white-space": "nowrap",
    "overflow": "hidden",
    "text-overflow": "ellipsis"
  },
  ".toolbar .toolbar-tools > *:not([disabled])": {
    "pointer-events": "auto"
  },
  ".toolbar .toolbar-tools > *": {
    "margin": "0 8px"
  },
  ".toolbar .toolbar-tools > .fit": {
    "position": "absolute",
    "top": "auto",
    "right": "0",
    "bottom": "0",
    "left": "0",
    "width": "auto",
    "margin": "0"
  },
  ".toolbar .toolbar-tools > .indent": {
    "margin-left": "60px"
  },
  ".toolbar-tools": {
    "position": "relative",
    "height": "64px",
    "padding": "0 8px",
    "pointer-events": "none"
  }
};