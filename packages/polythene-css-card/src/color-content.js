import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [], // eslint-disable-line no-unused-vars
});

const tintFns = tint => ({
  ["color_" + tint + "_title_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__title": {
        color: vars["color_" + tint + "_title_text"]
      },
    })
  ],
  ["color_" + tint + "_subtitle_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__subtitle": {
        color: vars["color_" + tint + "_subtitle_text"]
      },
    })
  ],
  ["color_" + tint + "_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__text": {
        color: vars["color_" + tint + "_text"]
      },
    })
  ],
  ["color_" + tint + "_actions_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions--border": {
        borderTop: "1px solid " + vars["color_" + tint + "_actions_border"]
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
