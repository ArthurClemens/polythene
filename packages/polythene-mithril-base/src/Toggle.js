import { renderer as h } from "./renderer";

const updateState = vnode => {
  if (vnode.attrs.getState) {
    vnode.attrs.getState({
      visible: vnode.state.visible,
      transitioning: vnode.state.transitioning
    });
  }
};

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
    return state.visible
      ? h(attrs.instance,
          Object.assign(
            {},
            attrs,
            {
              setDisplayState: ({ transitioning, visible }) => {
                if (transitioning !== undefined) {
                  state.transitioning = transitioning;
                }
                if (visible !== undefined) {
                  state.visible = visible;
                  state.transitioning = false;
                }
                updateState(vnode);
                setTimeout(h.redraw);
              }
            }
          )
        )
      : h("span", { className: attrs.placeholderClassName });
  }
};
