// @ts-check

const modes = {
  hidden:   "hidden",
  visible:  "visible",
  exposing: "exposing",
  hiding:   "hiding",
};

export const _Conditional = ({ h, useState, useEffect, ...props }) => {
  const initialMode = props.permanent
    ? modes.visible
    : props.permanent || props.show
      ? modes.visible
      : modes.hidden;
  const [mode, setMode] = useState(initialMode);

  useEffect(
    () => {
      let newMode = mode;
      if (props.permanent) {
        if (mode === modes.visible && props.show) {
          newMode = modes.exposing;
        } else if (mode === modes.exposing && !props.show) {
          newMode = modes.hiding;
        }
      } else {
        // "normal" type
        if (mode === modes.hidden && props.show) {
          newMode = modes.visible;
        } else if (mode === modes.visible && !props.show) {
          newMode = modes.hiding;
        }
      }
      if (newMode !== mode) {
        setMode(newMode);
      }
    },
    [props]
  );

  const placeholder = h("span", { className: props.placeholderClassName });

  // No didHide callback passed: use normal visibility evaluation
  if (!props.didHide) {
    return props.permanent || props.inactive || props.show
      ? h(props.instance, props)
      : placeholder;
  }

  const visible = mode !== modes.hidden;
  return visible
    ? h(props.instance, {
      ...props,
      didHide:
        /**
         * @param {any} args
         */
        (args) => (
          props.didHide(args),
          setMode(props.permanent
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
};
