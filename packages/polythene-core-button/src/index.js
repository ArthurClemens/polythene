import { filterSupportedAttributes, iconDropdownDown } from "polythene-core";
import classes from "polythene-css-classes/button";
import { useAnimatedShadow } from "./useAnimatedShadow";

export const _Button = ({ h, a, getDom, useState, useEffect, useRef, Ripple, Shadow, Icon, ...props }) => {
  const [domElement, setDomElement] = useState();
  const [isInactive, setIsInactive] = useState(props.inactive);
  const [hasFocus, setHasFocus] = useState(false);
  const [hasMouseOver, setHasMouseOver] = useState(false);
  const disabled = props.disabled;
  const inactive = props.inactive || isInactive;
  const onClickHandler = props.events && props.events[a.onclick];
  const onKeyUpHandler = (props.events && props.events[a.onkeyup]) || onClickHandler;
  const [shadowDepth] = props.raised
    ? useAnimatedShadow({ useState, useEffect, useRef, domElement, ...props })
    : [0];

  const handleInactivate = () => (
    setIsInactive(true),
    setTimeout(() => (
      setIsInactive(false)
    ), props.inactivate * 1000)
  );

  useEffect(
    () => {
      if (!domElement || !domElement.addEventListener) return;
      const onFocus = () => setHasFocus(!hasMouseOver);
      const onBlur = () => setHasFocus(false);
      const onMouseOver = () => setHasMouseOver(true);
      const onMouseOut = () => setHasMouseOver(false);
      const onClick = handleInactivate;

      domElement.addEventListener("focus", onFocus, false);
      domElement.addEventListener("blur", onBlur, false);
      domElement.addEventListener("mouseover", onMouseOver, false);
      domElement.addEventListener("mouseout", onMouseOut, false);
      domElement.addEventListener("click", onClick, false);

      return () => {
        domElement.removeEventListener("focus", onFocus, false);
        domElement.removeEventListener("blur", onBlur, false);
        domElement.removeEventListener("mouseover", onBlur, false);
        domElement.removeEventListener("mouseout", onMouseOut, false);
        domElement.removeEventListener("click", onClick, false);
      };
    },
    [domElement]
  );

  const componentProps = Object.assign({},
    filterSupportedAttributes(props, { add: [a.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    getDom(dom => dom && !domElement && (
      setDomElement(dom),
      props.getDom && props.getDom(dom)
    )),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.super,
        props.parentClassName || classes.component,
        props.contained ? classes.contained : null,
        props.raised ? classes.contained : null,
        props.raised ? classes.raised : null,
        props.selected ? classes.selected : null,
        props.highLabel ? classes.highLabel : null,
        props.extraWide ? classes.extraWide : null,
        disabled ? classes.disabled : null,
        inactive ? classes.inactive : null,
        props.separatorAtStart ? classes.separatorAtStart : null,
        (props.border || props.borders) ? classes.border : null,
        props.dropdown ? classes.hasDropdown : null,
        props.dropdown
          ? props.dropdown.open
            ? classes.dropdownOpen
            : classes.dropdownClosed
          : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    },
    props.events,
    inactive ? null : {
      [a.tabindex]: disabled || inactive
        ? -1
        : props[a.tabindex] || 0,
      [a.onclick]: onClickHandler,
      [a.onkeyup]: e => {
        if (e.keyCode === 13 && hasFocus) {
          setHasFocus(false);
          if (onKeyUpHandler) {
            onKeyUpHandler(e);
          }
        }
      }
    },
    props.url,
    disabled ? { disabled: true } : null,
  );
  const noink = props.ink !== undefined && props.ink === false;
  const label = props.content
    ? props.content
    : props.label !== undefined
      ? typeof props.label === "object"
        ? props.label
        : h("div",
          { className: classes.label },
          h("div",
            {
              className: classes.textLabel,
              style: props.textStyle
            },
            props.label
          )
        )
      : props.children;
  const noWash = disabled                         // if disabled: no wash
    || (props.raised && props.wash !== true)      // if raised/contained: enable wash if true
    || (props.wash !== undefined && !props.wash); // otherwise: enable wash unless false

  return h(props.element || "div",
    componentProps,
    h("div",
      {
        className: classes.content,
        style: props.style
      },
      [
        h(Shadow, {
          key: "shadow",
          shadowDepth: shadowDepth !== undefined
            ? shadowDepth
            : 0,
          animated: true
        }),
        disabled || noink
          ? null
          : h(Ripple, Object.assign({},
            {
              key: "ripple",
              target: domElement
            },
            props.ripple
          )),
        noWash
          ? null
          : h("div", { key: "wash", className: classes.wash }),
        label,
        props.dropdown
          ? h(Icon,
            {
              className: classes.dropdown,
              key: "dropdown",
              svg: { content: h.trust(iconDropdownDown) }
            }
          )
          : null
      ]
    )
  );
};
