import { filterSupportedAttributes, subscribe, unsubscribe, transitionComponent, isServer, pointerEndMoveEvent, stylePropCompare, transitionStateReducer } from "polythene-core";
import classes from "polythene-css-classes/menu";

const DEFAULT_OFFSET_H           = 0;
const DEFAULT_OFFSET_V           = "79%";
const DEFAULT_TYPE               = "floating";
const MIN_WIDTH                  = 1.5;
const DEFAULT_SHADOW_DEPTH       = 1;

const unifyWidth = width =>
  width < MIN_WIDTH ? MIN_WIDTH : width;

const widthClass = size =>
  classes.width_n + size.toString().replace(".", "-");

const initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false,
};

export const _Menu = ({ h, a, useReducer, useState, useEffect, useRef, getRef, Shadow, ...props }) => {
  const [, dispatchTransitionState] = useReducer(transitionStateReducer, initialTransitionState);
  const [domElement, setDomElement] = useState();
  const [, setIsVisible] = useState(!!props.permanent);

  const panelElRef = useRef();
  const contentElRef = useRef();

  const update = () => {
    positionMenu();
    scrollContent();
  };

  const transitionOptions = ({ isShow, hideDelay = props.hideDelay }) => ({
    dispatchTransitionState,
    setIsVisible,
    props: Object.assign({}, props, {
      hideDelay
    }),
    isShow,
    beforeTransition: isShow
      ? () => update()
      : null,
    domElements: {
      el: panelElRef.current,
      showClassElement: domElement,
    },
    showClass: classes.visible
  });

  const isTopMenu = () => 
    props.topMenu || stylePropCompare({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: `"${"top_menu"}"`
    });
    
  const positionMenu = () => {
    if (isServer) {
      return;
    }
    if (!props.target) {
      return;
    }
    const panelEl = panelElRef.current;
    const contentEl = contentElRef.current;
    const targetEl = document.querySelector(props.target);
    if (!targetEl) {
      return;
    }
    if (!panelEl) {
      return;
    }
  
    // Don't set the position or top offset if the menu position is fixed
    const hasStylePositionFixed = stylePropCompare({
      element: panelEl,
      prop: "position",
      equals: "fixed"
    });
  
    if (hasStylePositionFixed && !isTopMenu()) {
      Object.assign(panelEl.style, {});
      panelEl.offsetHeight; // force reflow
      return;
    }
  
    const parentRect = panelEl.parentNode.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();
    const attrsOffsetH = props.offsetH !== undefined
      ? props.offsetH
      : props.offset !== undefined
        ? props.offset // deprecated
        : DEFAULT_OFFSET_H;
    const attrsOffsetV = props.offsetV !== undefined
      ? props.offsetV
      : DEFAULT_OFFSET_V;
    const offsetH = attrsOffsetH.toString().indexOf("%") !== -1
      ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width)
      : Math.round(parseFloat(attrsOffsetH));
    const offsetV = attrsOffsetV.toString().indexOf("%") !== -1
      ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height)
      : Math.round(parseFloat(attrsOffsetV));
    let positionOffsetV = offsetV;
  
    const attrsOrigin = props.origin || "top";
    const origin = attrsOrigin.split(/\W+/).reduce((acc, curr) => (
      acc[curr] = true,
      acc
    ), {});
  
    const firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
  
    if (props.reposition) {
      // get the first List Tile to calculate the top position  
      const selectedItem = contentEl.querySelector("." + classes.selectedListTile);
      if (firstItem && selectedItem) {
        // calculate v position: menu should shift upward relative to the first item
        const firstItemRect = firstItem.getBoundingClientRect();
        const selectedItemRect = selectedItem.getBoundingClientRect();
        positionOffsetV = firstItemRect.top - selectedItemRect.top;
      }
      // align to middle of target
      const alignEl = selectedItem || firstItem;
      const alignRect = alignEl.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();
      const heightDiff = targetRect.height - alignRect.height;
      positionOffsetV += Math.abs(heightDiff) / 2;
    } else if (props.origin && !hasStylePositionFixed) {
      if (origin.top) {
        positionOffsetV += targetRect.top - parentRect.top;
      } else if (origin.bottom) {
        positionOffsetV += targetRect.top - parentRect.bottom;
      }
    }
  
    if (props.height) {
      const firstItemHeight = firstItem
        ? firstItem.clientHeight
        : 48; // default List Tile height
      if (props.height === "max") {
        const topMargin = positionOffsetV;
        const bottomMargin = firstItemHeight;
        panelEl.style.height = `calc(100% - ${topMargin + bottomMargin}px)`;
      } else {
        const height = /^\d+$/.test(props.height.toString())
          ? `${props.height}px`
          : props.height;
        panelEl.style.height = height;
      }
    }
  
    // prevent animated changes
    const transitionDuration = panelEl.style.transitionDuration;
    panelEl.style.transitionDuration = "0ms";
  
    if (panelEl.parentNode && !hasStylePositionFixed) {
      if (origin.right) {
        panelEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
      } else {
        panelEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
      }
      if (origin.bottom) {
        panelEl.style.bottom = positionOffsetV + "px";
      } else {
        panelEl.style.top = positionOffsetV + "px";
      }
      panelEl.style.transformOrigin = attrsOrigin.split(/\W+/).join(" ");
    }
  
    panelEl.offsetHeight; // force reflow
    panelEl.style.transitionDuration = transitionDuration;
  };

  const scrollContent = () => {
    if (isServer) {
      return;
    }
    if (!props.scrollTarget) {
      return;
    }
    const scrollTargetEl = document.querySelector(props.scrollTarget);
    if (!scrollTargetEl) {
      return;
    }
    contentElRef.current.scrollTop = scrollTargetEl.offsetTop;
  };
  
  const showMenu = () =>
    transitionComponent(transitionOptions({ isShow: true }));
  
  const hideMenu = ({ hideDelay } = {}) =>
    transitionComponent(transitionOptions({ isShow: false, hideDelay }));
  
  useEffect(
    () => {
      if (!domElement) {
        return;
      }

      panelElRef.current = domElement.querySelector(`.${classes.panel}`);
      Object.assign(panelElRef.current.style, props.style);
      
      contentElRef.current = domElement.querySelector(`.${classes.content}`);
    
      const handleEscape = e => {
        if (e.key === "Escape" || e.key === "Esc") {
          hideMenu({ hideDelay: 0 });
        }
      };

      const handleDismissTap = e => {
        if (e.target === panelElRef.current) {
          return;
        }
        hideMenu();
      };

      const activateDismissTap = () => {
        pointerEndMoveEvent.forEach(evt =>
          document.addEventListener(evt, handleDismissTap));
      };
  
      const deActivateDismissTap = () => {
        pointerEndMoveEvent.forEach(evt =>
          document.removeEventListener(evt, handleDismissTap));
      };

      if (!props.permanent) {
        subscribe("resize", update);
        subscribe("keydown", handleEscape);

        setTimeout(() => {
          activateDismissTap();
          showMenu();
        }, 0);
      }

      return () => {
        if (!props.permanent) {
          unsubscribe("resize", update);
          unsubscribe("keydown", handleEscape);
          deActivateDismissTap();
        }
      }
    },
    [domElement]
  );
  
  const type = props.type || DEFAULT_TYPE;
  const componentProps = Object.assign({},
    filterSupportedAttributes(props, { remove: ["style"] }),
    props.testId && { "data-test-id": props.testId },
    getRef(dom => dom && !domElement && (
      setDomElement(dom),
      props.getRef && props.getRef(dom)
    )),
    {
      className: [
        classes.component,
        props.permanent ? classes.permanent : null,
        props.origin ? classes.origin : null,
        props.backdrop ? classes.showBackdrop : null,
        props.topMenu ? classes.isTopMenu : null,
        type === "floating" && !props.permanent ? classes.floating : null,
        props.width || props.size ? widthClass(unifyWidth(props.width || props.size)) : null,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    }
  );

  const shadowDepth = props.shadowDepth !== undefined
    ? props.shadowDepth
    : DEFAULT_SHADOW_DEPTH; 

  const contents = [
    h("div",
      {
        key: "backdrop",
        className: classes.backdrop,
      }
    ),
    h("div",
      {
        className: classes.panel,
        key: "panel",
      },
      [
        h(Shadow, {
          shadowDepth,
          animated: true,
          key: "shadow",
        }),
        h("div", 
          {
            className: classes.content,
            key: "content",
          },
          props.content || props.children
        )
      ]
    )
  ];

  const content = [
    props.before,
    contents,
    props.after
  ];

  return h(props.element || "div", componentProps, content);
};
