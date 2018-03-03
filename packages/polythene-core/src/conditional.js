
const modes = {
  hidden:   "hidden",
  visible:  "visible",
  exposing: "exposing",
  hiding:   "hiding",
};

export const Conditional = {
  getInitialState: (vnode, createStream) => {
    const attrs = vnode.attrs;
    if (attrs.permanent || !attrs.didHide) {
      return {};
    }
    const visible = attrs.inactive || attrs.show;
    const mode = createStream(attrs.exposing
      ? modes.visible
      : visible
        ? modes.visible
        : modes.hidden);
    return {
      mode,
      redrawOnUpdate: createStream.merge([mode])
    };
  },
  onUpdate: ({ state, attrs }) => {
    if (attrs.permanent || !attrs.didHide) {
      return;
    }
    const mode = state.mode();
    if (attrs.exposing) {
      if (mode === modes.visible && attrs.show) {
        state.mode(modes.exposing);
      } else if (mode === modes.exposing && !attrs.show) {
        state.mode(modes.hiding);
      }
    } else {
      // "normal" type
      if (mode === modes.hidden && attrs.show) {
        state.mode(modes.visible);
      } else if (mode === modes.visible && !attrs.show) {
        state.mode(modes.hiding);
      }
    }
  },
  view: ({ state, attrs }, { renderer: h }) => {
    // type:permanent: always show
    if (attrs.permanent) {
      return h(attrs.instance, attrs);
    }

    const placeholder = h("span", { className: attrs.placeholderClassName });

    // No didHide callback passed: use normal visibility evaulation
    if (!attrs.didHide) {
      return attrs.permanent || attrs.inactive || attrs.show
        ? h(attrs.instance, attrs)
        : placeholder;
    }

    // else: use didHide to reset the state after hiding
    const mode = state.mode();
    const visible = mode !== modes.hidden;
    return visible
      ? h(attrs.instance, Object.assign(
        {},
        attrs,
        {
          didHide: args => (
            attrs.didHide(args),
            state.mode(attrs.exposing
              ? modes.visible
              : modes.hidden
            )
          )
        },
        mode === modes.hiding && {
          show: true,
          hide: true
        }
      ))
      : placeholder; 
  }
};

Conditional.displayName = "Conditional";
