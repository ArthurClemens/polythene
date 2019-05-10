import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/list-tile";

export const _ListTile = ({ h, a, Ripple, Icon, ...props }) => {
  
  const hasTabIndex = !props.header && !props.url && !(props.secondary && props.secondary.url);
  const heightClass = props.subtitle
    ? classes.hasSubtitle
    : props.highSubtitle
      ? classes.hasHighSubtitle
      : props.front || props.indent
        ? classes.hasFront
        : null;
  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props, { remove: ["tabindex", "tabIndex"] }), // tabindex is set elsewhere
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.selected              ? classes.selected : null,
        props.disabled              ? classes.disabled : null,
        props.sticky                ? classes.sticky : null,
        props.compact               ? classes.compact : null,
        props.hoverable             ? classes.hoverable : null,
        props.selectable            ? classes.selectable : null,
        props.highlight             ? classes.highlight : null,
        props.rounded               ? classes.rounded : null,
        props.header                ? classes.header : null,
        props.inset || props.insetH ? classes.insetH : null,
        props.inset || props.insetV ? classes.insetV : null,
        props.navigation            ? classes.navigation : null,
        props.tone === "dark"       ? "pe-dark-tone" : null,
        props.tone === "light"      ? "pe-light-tone" : null,
        heightClass,
        props.className || props[a.class],
      ].join(" "),
    },
    hasTabIndex && { [a.tabindex]: props[a.tabindex] || 0 }
    // events and url are attached to primary content to not interfere with controls
  );

  const primaryProps = Object.assign(
    {},
    { key: "primary" },
    props
  );
  delete primaryProps.id;
  delete primaryProps[a.class];
  const contents = [
    props.ink && !props.disabled
      ? h(Ripple,
          Object.assign({},
            props.ripple,
            { key: "ripple" }
          )
        )
      : null,
    primaryContent({ h, a, props: primaryProps }),
    props.secondary
      ? secondaryContent({ h, a, Icon, props: props.secondary })
      : null
  ];
  const content = [
    props.before,
    contents,
    props.after
  ];

  return h("div", // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content
    componentProps,
    content
  );
};

const primaryContent = ({ h, a, props }) => {
  const url = props.keyboardControl
    ? null
    : props.url;
  const element = props.element
    ? props.element
    : url
      ? "a"
      : "div";
  const contentFrontClass = [
    classes.content,
    classes.contentFront,
    props.compactFront ? classes.compactFront : null,
  ].join(" ");
  const frontComp = props.front || props.indent
    ? h("div", Object.assign(
      {},
      { key: "front" },
      { className: contentFrontClass }
    ), props.front)
    : null;
  const hasTabIndex = !props.header && props.url;
  const elementProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.events,
    { key: "primary" },
    {
      className: classes.primary,
      style: null
    },
    hasTabIndex && { [a.tabindex]: props[a.tabindex] || 0 },
    url
  );
  const content = props.content
    ? props.content 
    : [
      frontComp,
      h("div",
        {
          className: classes.content,
          style: props.style
        },
        [
          props.title && !props.content
            ? h("div", Object.assign(
              {},
              { key: "title" },
              { className: classes.title }
            ), props.title)
            : null,
          props.subtitle
            ? h("div", Object.assign(
              {},
              { key: "subtitle" },
              { className: classes.subtitle }
            ), props.subtitle)
            : null,
          props.highSubtitle
            ? h("div", Object.assign(
              {},
              { key: "highSubtitle" },
              { className: classes.subtitle + " " + classes.highSubtitle }
            ), props.highSubtitle)
            : null,
          props.subContent
            ? h("div", Object.assign(
              {},
              { key: "subContent" },
              { className: classes.subContent }
            ), props.subContent)
            : null,
          props.children,
        ]
      )
    ];
  return h(element, elementProps, content);
};

const secondaryContent = ({ h, a, Icon, props = {} }) => {
  const url = props.keyboardControl
    ? null
    : props.url;
  const element = props.element
    ? props.element
    : url
      ? "a"
      : "div";
  const hasTabIndex = props.url;
  return h(element,
    Object.assign(
      {},
      url,
      {
        className: classes.secondary,
      },
      props.events,
      filterSupportedAttributes(props),
      hasTabIndex && { [a.tabindex]: props[a.tabindex] || 0 },
      { key: "secondary" },
    ),
    h("div",
      { className: classes.content },
      [
        props.icon ? h(Icon, props.icon) : null,
        props.content ? props.content : null
      ]
    )
  );
};


