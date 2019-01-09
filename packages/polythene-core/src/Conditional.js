// @ts-check

const modes = {
  hidden:   "hidden",
  visible:  "visible",
  exposing: "exposing",
  hiding:   "hiding",
};

export const Conditional = {
  /**
   * @param {object} vnode
   * @param {object} createStream
   */
  getInitialState: (vnode, createStream) => {
    const attrs = vnode.attrs;
    if (!attrs.didHide) {
      return {};
    }
    const visible = attrs.permanent || attrs.show;
    const mode = createStream(attrs.permanent
      ? modes.visible
      : visible
        ? modes.visible
        : modes.hidden);
    return {
      mode,
      redrawOnUpdate: createStream.merge([mode])
    };
  },
  /**
   * @param {object} params
   * @param {object} params.state
   * @param {object} params.attrs
   */
  onUpdate: ({ state, attrs }) => {
    if (!attrs.didHide) {
      return;
    }
    const mode = state.mode();
    if (attrs.permanent) {
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
  /**
   * @param {object} params
   * @param {object} params.state
   * @param {object} params.attrs
   * @param {object} attrs
   * @param {function} attrs.renderer
   */
  view: ({ state, attrs }, { renderer: h }) => {
    const placeholder = h("span", { className: attrs.placeholderClassName });
        
    // No didHide callback passed: use normal visibility evaluation
    if (!attrs.didHide) {
      return attrs.permanent || attrs.inactive || attrs.show
        ? h(attrs.instance, attrs)
        : placeholder;
    }

    // else: use didHide to reset the state after hiding
    const mode = state.mode();
    const visible = mode !== modes.hidden;
    return visible
      ? h(attrs.instance, {
        ...attrs,
        didHide:
          /**
           * @param {any} args
           */
          (args) => (
            attrs.didHide(args),
            state.mode(attrs.permanent
              ? modes.visible
              : modes.hidden
            )
          ),
        ...(mode === modes.hiding
          ? { show: true, hide: true }
          : undefined
        )
      })
      : placeholder; 
  },
  displayName: "Conditional"
};

