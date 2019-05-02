import { filterSupportedAttributes, iconDropdownDown } from "polythene-core";
import classes from "polythene-css-classes/button";
import { useAnimatedShadow } from "./useAnimatedShadow";

export const _Button = ({ h, a, getRef, useState, useEffect, useRef, Ripple, Shadow, Icon, ...props }) => {
  const events = props.events || {};
  const [domElement, setDomElement] = useState();
  const [isInactive, setIsInactive] = useState(props.inactive);
  const [hasFocus, setHasFocus] = useState(false);
  const disabled = props.disabled;
  const inactive = props.inactive || isInactive;
  const onClickHandler = events[a.onclick] || (() => {});
  const onKeyUpHandler = events[a.onkeyup] || onClickHandler;
  const [shadowDepth] = props.raised
    ? useAnimatedShadow({ useState, useEffect, useRef, domElement, ...props })
    : [0];

  const handleInactivate = () => {
    if (props.inactivate === undefined) {
      return;
    }
    setIsInactive(true);
    setTimeout(() => (
      setIsInactive(false)
    ), props.inactivate * 1000);
  };

  const componentProps = Object.assign({},
    filterSupportedAttributes(props, { add: [a.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    getRef(dom => dom && !domElement && (
      setDomElement(dom),
      props.getRef && props.getRef(dom)
    )),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.super,
        props.parentClassName || classes.component,
        props.contained ? classes.contained : null,
        props.raised ? classes.contained : null,
        props.raised ? classes.raised : null,
        hasFocus ? classes.focus : null,
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
    inactive ? null : {
      [a.tabindex]: disabled || inactive
        ? -1
        : props[a.tabindex] || 0,
      [a.onfocus]: e => (
        setHasFocus(true),
        events[a.onfocus] && events[a.onfocus](e)
      ),
      [a.onblur]: e => (
        setHasFocus(false),
        events[a.onblur] && events[a.onblur](e)
      ),
      ...events,
      [a.onclick]: e => (
        setHasFocus(false),
        handleInactivate(e),
        onClickHandler(e)
      ),
      [a.onkeyup]: e => {
        // With focus, trigger click with ENTER and with SPACE
        if (hasFocus) {
          if (e.keyCode === 13 || e.keyCode == 0 || e.keyCode == 32) {
            setHasFocus(false);
            onKeyUpHandler(e);
          }
        }
      },
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
  
  /*
  Use wash to indicate focus, or hover when not a raised button.
  */
  const showWash = !disabled && (
    (props.raised && (/* hasFocus ||  */props.wash === true))
    || (!props.raised && (/* hasFocus &&  */props.wash !== false))
  );

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
        showWash
          ? h("div", { key: "wash", className: classes.wash })
          : null,
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
