import m from "mithril";

export const Conditional = {
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
      ? m(attrs.instance,
          Object.assign(
            {},
            attrs,
            {
              setVisible: value => (
                state.visible = value,
                m.redraw()
              ),
              setTransitioning: value => (
                state.transitioning = value,
                m.redraw()
              )
            }
          )
        )
      : m("span", { className: attrs.placeholderClassName });
  }
};
