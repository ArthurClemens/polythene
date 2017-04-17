import m from "mithril";
import spinner from "polythene-spinner";
import { customTheme } from "./theme";
import classes from "./classes";

const layer = num =>
  m("div",
    {
      class: [
        classes.layer,
        classes.layerN + num
      ].join(" ")
    },
    [
      m("div",
        {
          class: [
            classes.circleClipper,
            classes.circleClipperLeft
          ].join(" ")
        },
        m("div", { class: classes.circle })
      ),
      m("div",
        { class: classes.gapPatch },
        m("div", { class: classes.circle })
      ),
      m("div",
        {
          class: [
            classes.circleClipper,
            classes.circleClipperRight
          ].join(" ")
        }, m("div", { class: classes.circle })
      )
    ]
  );

const view = ({ attrs }) => {
  attrs.content = m("div",
    { class: classes.animation },
    [1,2,3,4].map(num => layer(num)));
  attrs.instanceClass = classes.component;
  return m(spinner, attrs);
};

export default {
  theme: customTheme, // accepts (selector, vars)
  view
};
