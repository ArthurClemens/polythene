import { filterSupportedAttributes, iconDropdownDown } from "polythene-core";
import classes from "polythene-css-classes/button";
import { useAnimatedShadow } from "./useAnimatedShadow";

export const _Button = ({ h, a, getRef, useState, useEffect, useRef, Ripple, Shadow, Icon, ...props }) => {
  const events = props.events || {};
  const [domElement, setDomElement] = useState();
  const contentElement = useRef();
  const [isInactive, setIsInactive] = useState(props.inactive);
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

  const hasHover = !disabled && !props.selected && (
    props.raised
      ? props.wash
      : props.wash !== false
  );

  const componentProps = Object.assign({},
    filterSupportedAttributes(props, { add: [a.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
    getRef(dom => {
      if (!dom || domElement) {
        return;
      }
      setDomElement(dom);
      if (dom.querySelector) {
        contentElement.current = dom.querySelector(`.${classes.content}`);
      }
      if (props.getRef) {
        props.getRef(dom);
      }
    }),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.super,
        props.parentClassName || classes.component,
        props.contained ? classes.contained : null,
        props.raised ? classes.contained : null,
        props.raised ? classes.raised : null,
        hasHover ? classes.hasHover : null,
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
      [a.onmouseout]: e => (
        document.activeElement.blur(),
        props.events && props.events[a.onmouseout]
      ),
      ...events,
      [a.onclick]: e => (
        document.activeElement.blur(),
        handleInactivate(e),
        onClickHandler(e)
      ),
      [a.onkeyup]: e => {
        if (onKeyUpHandler) {
          onKeyUpHandler(e);
        }
      }
    },
    props.url,
    disabled ? { disabled: true } : null,
  );

  const noink = props.ink !== undefined && props.ink === false;
  const buttonContent = props.content
    ? props.content
    : props.label !== undefined
      ? typeof props.label === "object"
        ? props.label
        : h("div",
          {
            className: classes.label,
            key: "label"
          },
          h("div",
            {
              className: classes.textLabel,
              style: props.textStyle
            },
            props.label
          )
        )
      : props.children;
  

  return h(props.element || "a",
    componentProps, [
      props.before,
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
                target: contentElement.current
              },
              props.ripple
            )),
          h("div", { key: "wash", className: classes.wash }),
          
          buttonContent,
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
      ),
      props.after,
    ]
  );
};
