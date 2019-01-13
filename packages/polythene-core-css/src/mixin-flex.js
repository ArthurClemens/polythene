// @ts-check

/**
 * @typedef {{[selector:string] : object}} Style
 * @typedef {Array<Style> | Style} Styles
 */

/**
 * @type {Styles} layout
 */
const layout = [
  {
    "display": "-webkit-box"
  },
  {
    "display": "-moz-box"
  },
  {
    "display": "-ms-flexbox",
  },
  {
    "display": "-webkit-flex"
  },
  {
    "display": "flex"
  }
];

/**
 * @type {Styles} layoutInline
 */
const layoutInline = [
  layout, {
    "display": "-ms-inline-flexbox"
  }, {
    "display": "-webkit-inline-flex"
  }, {
    "display": "inline-flex"
  }
];

/**
 * @type {Styles} layoutHorizontal
 */
const layoutHorizontal = [
  layout, {
    "-ms-flex-direction": "row",
    "-webkit-flex-direction": "row",
    "flex-direction": "row"
  }
];

/**
 * @type {Styles} layoutHorizontalReverse
 */
const layoutHorizontalReverse = [
  layout, {
    "-ms-flex-direction": "row-reverse",
    "-webkit-flex-direction": "row-reverse",
    "flex-direction": "row-reverse"
  }
];

/**
 * @type {Styles} layoutVertical
 */
const layoutVertical = [
  layout, {
    "-ms-flex-direction": "column",
    "-webkit-flex-direction": "column",
    "flex-direction": "column"
  }
];

/**
 * @type {Styles} layoutVerticalReverse
 */
const layoutVerticalReverse = [
  layout, {
    "-ms-flex-direction": "column-reverse",
    "-webkit-flex-direction": "column-reverse",
    "flex-direction": "column-reverse"
  }
];

/**
 * @type {Styles} layoutWrap
 */
const layoutWrap = [
  layout, {
    "-ms-flex-wrap": "wrap",
    "-webkit-flex-wrap": "wrap",
    "flex-wrap": "wrap"
  }
];

/**
 * @type {Styles} layoutWrapReverse
 */
const layoutWrapReverse = [
  layout, {
    "-ms-flex-wrap": "wrap-reverse",
    "-webkit-flex-wrap": "wrap-reverse",
    "flex-wrap": "wrap-reverse"
  }
];

/**
 * @type {Styles} layoutStart
 */
const layoutStart = [
  layout, {
    "-ms-flex-align": "start",
    "-webkit-align-items": "flex-start",
    "align-items": "flex-start"
  }
];

/**
 * @type {Styles} layoutCenter
 */
const layoutCenter = [
  layout, {
    "-ms-flex-align": "center",
    "-webkit-align-items": "center",
    "align-items": "center"
  }
];

/**
 * @type {Styles} layoutEnd
 */
const layoutEnd = [
  layout, {
    "-ms-flex-align": "end",
    "-webkit-align-items": "flex-end",
    "align-items": "flex-end"
  }
];

/**
 * @type {Styles} layoutJustified
 */
const layoutJustified = [
  layout, {
    "-ms-flex-pack": "justify",
    "-webkit-justify-content": "space-between",
    "justify-content": "space-between"
  }
];

/**
 * @type {Styles} layoutStartJustified
 */
const layoutStartJustified = [
  layout, {
    "-ms-flex-pack": "start",
    "-webkit-justify-content": "flex-start",
    "justify-content": "flex-start"
  }
];

/**
 * @type {Styles} layoutCenterJustified
 */
const layoutCenterJustified = [
  layout, {
    "-ms-flex-pack": "center",
    "-webkit-justify-content": "center",
    "justify-content": "center"
  }
];

/**
 * @type {Styles} layoutEndJustified
 */
const layoutEndJustified = [
  layout, {
    "-ms-flex-pack": "end",
    "-webkit-justify-content": "flex-end",
    "justify-content": "flex-end"
  }
];

/**
 * @type {Styles} layoutCenterCenter
 */
const layoutCenterCenter = [
  layoutCenterJustified,
  layoutCenter
];

/**
 * @type {Styles} layoutAroundJustified
 */
const layoutAroundJustified = [
  layout, {
    "-ms-flex-pack": "distribute",
    "-webkit-justify-content": "space-around",
    "justify-content": "space-around"
  }
];

/**
 * @param {number} [num=1] 
 * @returns {Styles}
 */
const flex = (num = 1) => (
  [{
    "-webkit-box-flex": num
  }, {
    "-moz-box-flex": num
  }, {
    "-webkit-flex": num
  }, {
    "-ms-flex": num
  }, {
    "flex": num
  }, num === 1 ? {
    "-webkit-flex-basis": "0.000000001px"
  } : {}, num === 1 ? {
    "flex-basis": "0.000000001px"
  } : {}]
);

/**
 * @type {Styles} flexAuto
 */
const flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

/**
 * @type {Styles} flexAutoVertical
 */
const flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

/**
 * 
 * @param {number|"none"} index 
 * @returns {Styles}
 */
const flexIndex = index => ({
  "-ms-flex": index,
  "-webkit-flex": index,
  "flex": index
});

/**
 * 
 * @param {number} value 
 * @returns {Styles}
 */
const flexGrow = value => ({
  "-webkit-flex-grow": value,
  "flex-grow": value
});

/**
 * 
 * @param {number} value 
 * @returns {Styles}
 */
const flexShrink = value => ({
  "-webkit-flex-shrink": value,
  "flex-shrink": value
});

/**
 * @type {Styles} selfStart
 */
const selfStart = {
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};

/**
 * @type {Styles} selfCenter
 */
const selfCenter = {
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};

/**
 * @type {Styles} selfEnd
 */
const selfEnd = {
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};

/**
 * @type {Styles} selfStretch
 */
const selfStretch = {
  "-ms-align-self": "stretch",
  "-webkit-align-self": "stretch",
  "align-self": "stretch"
};

export default {
  flex,
  flexAuto,
  flexAutoVertical,
  flexIndex,
  flexGrow,
  flexShrink,
  layout,
  layoutAroundJustified,
  layoutCenter,
  layoutCenterCenter,
  layoutCenterJustified,
  layoutEnd,
  layoutEndJustified,
  layoutHorizontal,
  layoutHorizontalReverse,
  layoutInline,
  layoutJustified,
  layoutStart,
  layoutStartJustified,
  layoutVertical,
  layoutVerticalReverse,
  layoutWrap,
  layoutWrapReverse,
  selfCenter,
  selfEnd,
  selfStart,
  selfStretch,
};
