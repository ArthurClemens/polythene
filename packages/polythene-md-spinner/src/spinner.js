import m from "mithril";
import spinner from "polythene-spinner";
import { customTheme } from "./theme";
import classes from "./classes";

const layer = num =>
  m("div",
    {
      className: [
        classes.layer,
        classes.layerN + num
      ].join(" ")
    },
    [
      m("div",
        {
          className: [
            classes.circleClipper,
            classes.circleClipperLeft
          ].join(" ")
        },
        m("div", { className: classes.circle })
      ),
      m("div",
        { className: classes.gapPatch },
        m("div", { className: classes.circle })
      ),
      m("div",
        {
          className: [
            classes.circleClipper,
            classes.circleClipperRight
          ].join(" ")
        }, m("div", { className: classes.circle })
      )
    ]
  );

const view = ({ attrs }) => {
  attrs.content = m("div",
    { className: classes.animation },
    [1,2,3,4].map(num => layer(num)));
  attrs.instanceClass = classes.component;
  return m(spinner, attrs);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
