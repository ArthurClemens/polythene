import { isTouch, pointerStartDownEvent, pointerMoveEvent, pointerEndDownEvent, isClient, filterSupportedAttributes, getStyle } from "polythene-core";
import classes from "polythene-css-classes/slider";

const MAX_TICKS = 100;

const positionFromEvent = (e, isVertical) => (
  // isVertical not yet implemented
  isTouch && e.touches
    ? isVertical ? e.touches[0].pageY : e.touches[0].pageX
    : isVertical ? e.pageY : e.pageX);

export const _Slider = ({ h, a, useState, useEffect, useRef, getRef, ...props }) => {
  const min = props.min !== undefined ? props.min : 0;
  const max = props.max !== undefined ? props.max : 100;
  const range = max - min;
  const stepSize = props.stepSize !== undefined
    ? props.stepSize
    : 1;
  const normalizeFactor = 1 / stepSize;
  const hasTicks = props.ticks !== undefined && props.ticks !== false;
  const interactiveTrack = (props.interactiveTrack !== undefined) ? props.interactiveTrack : true;
  const stepCount = Math.min(MAX_TICKS, parseInt(range / stepSize, 10));
  const defaultValue = props.defaultValue !== undefined
    ? props.defaultValue
    : props.value !== undefined
      ? props.value
      : 0;

  const focusElementRef = useRef();
  const trackElRef = useRef();
  const controlElRef = useRef();
  const pinElRef = useRef();

  const [domElement, setDomElement] = useState();
  const [fraction, setFraction] = useState(min);
  const [hasFocus, setHasFocus] = useState(false);
  const [value, setValue] = useState();
  const [previousValue, setPreviousValue] = useState();
  const [isActive, setIsActive] = useState(false);
  const isDraggingRef = useRef(false);
  const clickOffsetRef = useRef(0);
  const rangeWidthRef = useRef(0);
  const rangeOffsetRef = useRef(0);
  const controlWidthRef = useRef(0);

  const updatePinPosition = () => {
    if (controlElRef.current && pinElRef.current) {
      const left = fraction * rangeWidthRef.current;
      pinElRef.current.style.left = left + "px";
    }
  };
  
  const generateTickMarks = (h, stepCount, stepSize, value) => {
    const items = [];
    const stepWithValue = value / stepSize;
    let s = 0;
    while (s < stepCount + 1) {
      items.push(h("div", {
        className: s <= stepWithValue
          ? [classes.tick, classes.tickValue].join(" ")
          : classes.tick,
        key: `tick-${s}`
      }));
      s++;
    }
    return items;
  };
  
  const readRangeData = () => {
    if (controlElRef.current && isClient) {
      // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
      controlWidthRef.current = parseFloat(getStyle({ element: controlElRef.current, prop: "width" }));
      rangeWidthRef.current = trackElRef.current.getBoundingClientRect().width - controlWidthRef.current;
      const styles = window.getComputedStyle(trackElRef.current);
      rangeOffsetRef.current = parseFloat(styles.marginLeft);
    }
  };
  
  const updateClickOffset = (controlOffset = 0) => {
    clickOffsetRef.current = trackElRef.current.getBoundingClientRect().left - (rangeOffsetRef.current - controlWidthRef.current / 2) + controlOffset;
  };
  
  const initControlEvent = e => {
    const controlPos = controlElRef.current.getBoundingClientRect().left;
    const eventPos = positionFromEvent(e);
    const controlOffset = eventPos - controlPos - controlWidthRef.current / 2;
    updateClickOffset(controlOffset);
  };
  
  const initTrackEvent = () =>
    updateClickOffset(0);
  
  const handlePosEvent = e => {
    const pos = positionFromEvent(e) - clickOffsetRef.current;
    const newValue = min + ((pos - rangeOffsetRef.current) / rangeWidthRef.current) * range;
    updateValue(newValue);
  };
  
  const startDrag = e => {
    if (isDraggingRef.current) return;
    e.preventDefault();
    isDraggingRef.current = true;
    setIsActive(true);
    deFocus();
  
    const drag = e => {
      if (!isDraggingRef.current) return;
      handlePosEvent(e);
    };
  
    const endDrag = () => {
      if (!isDraggingRef.current) return;
      deFocus();
      if (isClient) {
        pointerMoveEvent.forEach(evt =>
          window.removeEventListener(evt, drag));
        pointerEndDownEvent.forEach(evt =>
          window.removeEventListener(evt, endDrag));
      }
      isDraggingRef.current = false;
      setIsActive(false);
    };
  
    if (isClient) {
      pointerMoveEvent.forEach(evt =>
        window.addEventListener(evt, drag));
      pointerEndDownEvent.forEach(evt =>
        window.addEventListener(evt, endDrag));
    }
    readRangeData();
  };

  const handleNewValue = ({ value, shouldNotify = false }) => {
    if (value < min) value = min;
    if (value > max) value = max;
    const newValue = stepSize
      ? Math.round(value * normalizeFactor) / normalizeFactor
      : value;
    setFraction((newValue - min) / range);
    setPreviousValue(newValue);
    setValue(newValue);
    if (shouldNotify && props.onChange) {
      props.onChange({
        value: newValue
      });
    }
  };

  const updateValue = value => {
    handleNewValue({ value, shouldNotify: true });
  };

  const increment = useLargeStep =>
    updateValue(value + (useLargeStep ? 10 : 1) * (stepSize || 1));

  const decrement = useLargeStep =>
    updateValue(value - (useLargeStep ? 10 : 1) * (stepSize || 1));

  const deFocus = () => {
    if (focusElementRef.current) {
      focusElementRef.current.blur();
    }
    focusElementRef.current = undefined;
    setHasFocus(false);
  };
  
  const focus = element => {
    deFocus();
    focusElementRef.current = element;
    setHasFocus(true);
  };
  
  useEffect(
    () => {
      if (!domElement) {
        return;
      }

      trackElRef.current = domElement.querySelector(`.${classes.track}`);
      controlElRef.current = domElement.querySelector(`.${classes.control}`);
      pinElRef.current = domElement.querySelector(`.${classes.pin}`);

      readRangeData();
      handleNewValue({ value: defaultValue });
    },
    [domElement]
  );

  useEffect(
    () => {
      if (!props.pin) {
        return;
      }
      updatePinPosition();
    },
    [value]
  );

  // Handle external changes of `value`
  useEffect(
    () => {
      if (previousValue !== props.value) {
        handleNewValue({ value: props.value });
      }
    },
    [props.value]
  );


  const componentProps = Object.assign({}, 
    filterSupportedAttributes(props),
    getRef(dom => dom && !domElement && setDomElement(dom)),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.disabled ? classes.isDisabled : null,
        props.pin ? classes.hasPin : null,
        interactiveTrack ? classes.hasTrack : null,
        isActive ? classes.isActive : null,
        hasFocus ? classes.hasFocus : null,
        fraction === 0 ? classes.isAtMin : null,
        hasTicks ? classes.hasTicks : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    }
  );
  
  const onStartTrack = e => {
    e.preventDefault();
    if (isDraggingRef.current) {
      return;
    }
    readRangeData();
    initTrackEvent();
    handlePosEvent(e);
    startDrag(e);
  };

  const onInitDrag = e => {
    e.preventDefault();
    readRangeData();
    initControlEvent(e);
    startDrag(e);
  };

  const flexValueCss =  fraction + " 1 0%";
  const flexRestValue = 1 - fraction;
  const flexRestCss =   flexRestValue + " 1 0%";

  const content = [
    props.before,
    h("div",
      Object.assign(
        {},
        { className: classes.track },
        interactiveTrack && !props.disabled && pointerStartDownEvent.reduce((acc, evt) => (
          acc[a[`on${evt}`]] = onStartTrack,
          acc
        ), {})
      ),
      [
        h("div",
          {
            className: classes.trackPart + " " + classes.trackPartValue,
            style: {
              flex: flexValueCss,
              msFlex: flexValueCss,
              WebkitFlex: flexValueCss
            }
          },
          h("div", { className: classes.trackBar },
            h("div", { className: classes.trackBarValue })
          )
        ),
        h("div", Object.assign(
          {},
          {
            className: classes.control,
          },
          props.disabled
            ? { disabled: true }
            : {
              [a.tabindex]: props[a.tabindex] || 0,
              [a.onfocus]: () => focus(controlElRef.current),
              [a.onblur]: () => deFocus(),
              [a.onkeydown]: e => {
                if (e.key !== "Tab") {
                  e.preventDefault();
                }
                if (e.key === "Escape" || e.key === "Esc") {
                  controlElRef.current.blur(e);
                } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
                  decrement(!!e.shiftKey);
                } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
                  increment(!!e.shiftKey);
                } else if (e.key === "Home") {
                  updateValue(min);
                } else if (e.key === "End") {
                  updateValue(max);
                } else if (e.key === "PageDown") {
                  decrement(true);
                } else if (e.key === "PageUp") {
                  increment(true);
                }
                readRangeData();
              }
            },
          !props.disabled &&
            pointerStartDownEvent.reduce((acc, evt) => (
              acc[a[`on${evt}`]] = onInitDrag,
              acc
            ), {}),
          props.events
            ? props.events
            : null,
          hasTicks
            ? { step: stepCount }
            : null
        ),
        props.icon
          ? h("div",
            {
              className: classes.thumb,
            },
            props.icon
          )
          : null
        ),
        h("div",
          {
            className: classes.trackPart + " " + classes.trackPartRest,
            style: {
              flex: flexRestCss,
              msFlex: flexRestCss,
              WebkitFlex: flexRestCss,
              maxWidth: (flexRestValue * 100) + "%" // for IE Edge
            }
          },
          h("div", { className: classes.trackBar },
            h("div", { className: classes.trackBarValue })
          )
        ),
        hasTicks && !props.disabled
          ? h("div",
            {
              className: classes.ticks,
            },
            generateTickMarks(h, stepCount, stepSize, value)
          )
          : null,
        hasTicks && props.pin && !props.disabled
          ? h("div",
            {
              className: classes.pin,
              value
            }
          )
          : null
      ]
    ),
    props.after
  ];

  return h(props.element || "div", componentProps, content);
};
