import { customTheme } from "./theme";
import classes from "./classes";

export const theme = customTheme;

const layer = (num, h) =>
  h("div",
    {
      key: num,
      className: [
        classes.layer,
        classes.layerN + num
      ].join(" ")
    },
    [
      h("div",
        {
          key: "clipper-left",
          className: [
            classes.circleClipper,
            classes.circleClipperLeft
          ].join(" ")
        },
        h("div",
          {
            key: "circle",
            className: classes.circle
          }
        )
      ),
      h("div",
        {
          key: "gap-patch",
          className: classes.gapPatch
        },
        h("div", { className: classes.circle })
      ),
      h("div",
        {
          key: "clipper-right",
          className: [
            classes.circleClipper,
            classes.circleClipperRight
          ].join(" ")
        }, h("div", { className: classes.circle })
      )
    ]
  );

export const createProps = (vnode, { renderer: h }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  state.content = state.content || h("div",
    {
      key: "content",
      className: classes.animation
    },
    [1,2,3,4].map(num => layer(num, h))
  );
  return Object.assign(
    {},
    attrs,
    {
      className: [classes.component, attrs.className].join(" "),
      content: state.content
    }
  );
};
