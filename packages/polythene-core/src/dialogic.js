
export const createDialogicStyles = ({ showDelay, showDuration, showTimingFunction, hideDelay, hideDuration, hideTimingFunction, styles, ...otherProps }) => {
  const _styles = styles === undefined
    ? (
        showDelay !== undefined || showDuration !== undefined || showTimingFunction ||
        hideDelay !== undefined || hideDuration !== undefined || hideTimingFunction
      )
        ? {
          showStart: {
            ...(showDelay
              ? { transitionDelay: `${showDelay * 1000}ms` }
              : undefined
            ),
            ...(showDuration
              ? { transitionDuration: `${showDuration * 1000}ms` }
              : undefined
            ),
            ...(showTimingFunction
              ? { transitionTimingFunction: `${showTimingFunction}` }
              : undefined
            ),
          },
          hideStart: {
            ...(hideDelay
              ? { transitionDelay: `${hideDelay * 1000}ms` }
              : undefined
            ),
            ...(hideDuration
              ? { transitionDuration: `${hideDuration * 1000}ms` }
              : undefined
            ),
            ...(hideTimingFunction
              ? { transitionTimingFunction: `${hideTimingFunction}` }
              : undefined
            ),
          },
        }
        : undefined
      : styles;
    return {
      styles: _styles,
      otherProps
    };
};
