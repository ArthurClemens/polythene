import { filterSupportedAttributes } from "polythene-core";
import { customTheme } from "./theme";
import classes from "./classes";

export const element = "a";

export const theme = customTheme;

export const getInitialState = (vnode, createStream) => {
  const focus = createStream(false);
  const inactive = createStream(false);
  const mouseover = createStream(false);
  return {
    focus,
    inactive,
    mouseover,
    redrawOnUpdate: createStream.merge([focus, inactive, mouseover])
  };
};

export const createProps = (vnode, { keys: k }) => {
  const state = vnode.state;
  const attrs = vnode.attrs;
  const disabled = attrs.disabled;
  const inactive = attrs.inactive || state.inactive();
  const onClickHandler = attrs.events && attrs.events[k.onclick];
  const handleInactivate = () => (
    vnode.state.inactive(true),
    setTimeout(() => (
      vnode.state.inactive(false)
    ), attrs.inactivate * 1000)
  );
  return Object.assign(
    {}, 
    filterSupportedAttributes(attrs, { add: [k.formaction, "type"] }),
    {
      className: [
        attrs.parentClassName || classes.component,
        attrs.selected ? classes.selected : null,
        disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        attrs.borders ? classes.borders : null,
        state.focus() ? classes.focused : null,
        attrs.tone === "dark" ? "pe-dark-tone" : null,
        attrs.tone === "light" ? "pe-light-tone" : null,
        attrs.className || attrs[k.class],
      ].join(" ")
    },
    inactive ? null : {
      [k.tabindex]: disabled || inactive
        ? -1
        : attrs[k.tabindex] || 0,
      [k.onclick]: e => (
        attrs.inactivate !== undefined && handleInactivate(),
        onClickHandler && onClickHandler(e),
        true
      ),
      // handle focus events
      [k.onfocus]: () => vnode.state.focus(!state.mouseover()),
      [k.onblur]: () => vnode.state.focus(false),
      // don't show focus on click (detected by not being in mouse over state)
      [k.onmouseover]: () => vnode.state.mouseover(true),
      [k.onmouseout]: () => vnode.state.mouseover(false),
      // if focus, dispatch click event on ENTER
      [k.onkeydown]: e => {
        if (e.which === 13 && state.focus()) {
          vnode.state.focus(false);
          if (onClickHandler) {
            onClickHandler(e);
          }
        }
      }
    },
    attrs.style ? { style: {} } : null, // Set style on content, not on component
    attrs.events,
    attrs.url,
    disabled ? { disabled: true } : null
  );
};

export const createContent = (vnode, { renderer: h, keys: k, Ripple }) => {
  const attrs = vnode.attrs;
  const state = vnode.state;
  const noink = attrs.ink !== undefined && attrs.ink === false;
  const disabled = attrs.disabled;
  const children = attrs.children || vnode.children;
  const label = attrs.content
    ? attrs.content
    : attrs.label
      ? typeof attrs.label === "object"
        ? attrs.label
        : h("div", { key: "label", className: classes.label }, attrs.label)
      : children
        ? children
        : null;
  const noWash = disabled || (attrs.wash !== undefined && !attrs.wash);
  return label
    ? h("div",
      {
        [k.class]: classes.content,
        key: "button",
        style: attrs.style || {}
      },
      [
        !disabled && attrs.shadowComponent // "protected" option, used by raised-button
          ? attrs.shadowComponent
          : null,
        // Ripple
        disabled || noink
          ? null
          : Ripple && h(Ripple, Object.assign({},
            attrs.ripple,
            {
              key: "ripple"
              // target: () => state.dom
            }
          )),
        // hover
        noWash ? null : h("div", { key: "wash", className: classes.wash }),
        // focus
        disabled ? null : h("div", { key: "focus", className: classes.focus }),
        label
      ]
    )
    : null;
};
