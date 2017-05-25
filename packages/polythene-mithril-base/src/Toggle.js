import { renderer as h } from "./renderer";

export const Toggle = {
  oninit: vnode => {
    vnode.state = {
      visible: vnode.attrs.permanent || vnode.attrs.show || false,
      transitioning: false
    };
  },
  view: vnode => {
    const attrs = vnode.attrs;
    const state = vnode.state;
    if (!attrs.permanent && !state.transitioning) {
      if (attrs.show) {
        state.visible = true;
      } else if (attrs.hide) {
        state.visible = false;
      }
    }
    const updateState = () => {
      if (attrs.getState) {
        attrs.getState({
          visible: vnode.state.visible,
          transitioning: vnode.state.transitioning
        });
      }
    };
    return state.visible
      ? h(attrs.instance,
          Object.assign(
            {},
            attrs,
            {
              setVisible: value => {
                state.visible = value;
                updateState();
                h.redraw();
              },
              setTransitioning: value => {
                state.transitioning = value;
                updateState();
                h.redraw();
              },
            }
          )
        )
      : h("span", { className: attrs.placeholderClassName });
  }
};
