import { filterSupportedAttributes, unpackAttrs, subscribe, unsubscribe } from "polythene-core";
import classes from "polythene-css-classes/dialog-pane";
import buttonClasses from "polythene-css-classes/button";

const SCROLL_WATCH_END_TIMER = 50;

export const _DialogPane = ({ h, a, useState, useEffect, useRef, getRef, ...unpackedProps }) => {
  const props = unpackAttrs(unpackedProps);

  const [domElement, setDomElement] = useState();
  const [isScrolling, setIsScrolling] = useState(false);
  const [hasTopOverflow, setHasTopOverflow] = useState(false);
  const [hasBottomOverflow, setHasBottomOverflow] = useState(false);
  const headerElRef = useRef();
  const footerElRef = useRef();
  const scrollElRef = useRef();
  const scrollWatchIdRef = useRef();

  const updateScrollOverflowState = () => {
    const scroller = scrollElRef.current;
    if (!scroller) {
      return;
    }
    setHasTopOverflow(scroller.scrollTop > 0);
    setHasBottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
  };

  useEffect(
    () => {
      if (!domElement) {
        return;
      }
      headerElRef.current = domElement.querySelector(`.${classes.header}`);
      footerElRef.current = domElement.querySelector(`.${classes.footer}`);
      scrollElRef.current = domElement.querySelector(`.${classes.body}`);
    },
    [domElement]
  );

  useEffect(
    () => {
      if (!scrollElRef.current) {
        return;
      }
      const update = () => {
        updateScrollOverflowState();
      };
      subscribe("resize", update);

      return () => {
        unsubscribe("resize", update);
      };
    },
    [scrollElRef.current]
  );

  useEffect(
    () => {
      updateScrollOverflowState();
    },
    [scrollElRef.current, isScrolling]
  );
  
  const withHeader = props.header !== undefined || props.title !== undefined;
  const withFooter = props.footer !== undefined || props.footerButtons !== undefined;
  const borders = props.borders || "overflow";
  const showTopBorder = borders === "always" || (withHeader && borders === "overflow" && hasTopOverflow);
  const showBottomBorder = borders === "always" || (withFooter && borders === "overflow" && hasBottomOverflow);

  const componentProps = Object.assign(
    {}, 
    filterSupportedAttributes(props, { remove: ["style"] }), // style set in content, and set by show/hide transition
    props.testId && { "data-test-id": props.testId },
    getRef(dom => dom && !domElement && (
      setDomElement(dom),
      props.ref && props.ref(dom)
    )),
    {
      className: [
        classes.component,
        props.fullBleed ? classes.fullBleed : null,
        showTopBorder ? classes.borderTop : null,
        showBottomBorder ? classes.borderBottom : null,
        withHeader ? classes.withHeader : null,
        withFooter ? classes.withFooter : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.formOptions
  );

  const componentContent = h("div",
    {
      className: [
        classes.content,
        props.menu ? classes.menuContent : null
      ].join(" "),
      style: props.style
    },
    [
      props.header
        ? props.header
        : props.title
          ? h("div",
            {
              className: [
                classes.header,
                classes.headerWithTitle
              ].join(" "),
            },
            h("div",
              { className: classes.title },
              props.title
            )
          )
          : null,
      h("div",
        {
          className: classes.body,
          [a.onscroll]: () => {
            setIsScrolling(true);
            clearTimeout(scrollWatchIdRef.current);
            scrollWatchIdRef.current = setTimeout(() => {
              setIsScrolling(false);
            }, SCROLL_WATCH_END_TIMER);
          }
        },
        props.content || props.body || props.menu
      ),
      props.footer
        ? h("div",
          {
            className: classes.footer,
          },
          props.footer
        )
        : props.footerButtons
          ? h("div",
            {
              className: [
                classes.footer,
                classes.footerWithButtons,
                buttonClasses.row
              ].join(" "),
            },
            h("div",
              { className: classes.actions },
              props.footerButtons
            )
          )
          : null
    ]
  );
  const content = [
    props.before,
    componentContent,
    props.after
  ];
  return h(props.element || "form", componentProps, content);
};
