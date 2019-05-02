import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/card";

const createOverlay = ({ dispatcher, props, h, a }) => {
  const element = props.element || "div";
  const content = props.content.map(dispatcher);
  return h("div",
    {
      key: props.key || "card-overlay",
      style: props.style,
      className: [
        classes.overlay,
        props.sheet ? classes.overlaySheet : null,
        props.tone === "light" ? null : "pe-dark-tone", // default dark tone
        props.tone === "light" ? "pe-light-tone" : null,
      ].join(" ")
    },
    [
      h(element, {
        key: "content",
        className: [
          classes.overlayContent,
          props.className || props[a.class]
        ].join(" ")
      }, content),
      h("div",
        {
          key: "dimmer",
          className: classes.mediaDimmer
        }
      )
    ]
  );
};

const createAny = ({ props, h, a }) => {
  const element = props.element || "div";
  return h(element, Object.assign(
    {},
    filterSupportedAttributes(props),
    {
      key: props.key || "card-any",
      className: [
        classes.any,
        props.tight ? classes.textTight : null,
        props.className || props[a.class]
      ].join(" ")
    }
  ), props.content);
};

const createText = ({ props, h, a }) => {
  const element = props.element || "div";
  return h(element, Object.assign(
    {},
    filterSupportedAttributes(props),
    {
      key: props.key || "card-text",
      className: [
        classes.text,
        props.tight ? classes.textTight : null,
        props.className || props[a.class]
      ].join(" ")
    },
    props.events
  ), props.content);
};

const createHeader = ({ props, h, a, Icon, ListTile }) => {
  return h(ListTile, Object.assign(
    {},
    props,
    {
      key: props.key || "card-header",
      className: [
        classes.header,
        props.className || props[a.class]
      ].join(" ")
    },
    props.icon
      ? { front: h(Icon, props.icon) }
      : null
  ));
};

export const _Card = ({ h, a, CardActions, CardMedia, CardPrimary, Icon, ListTile, Shadow, ...props }) => {
  
  const componentProps = Object.assign({},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" ")
    },
    props.url,
    props.events
  );

  const dispatcher = block => {
    const key = Object.keys(block)[0];
    const props = Object.assign(
      {},
      block[key],
      {
        dispatcher,
        key
      }
    );
    switch (key) {
    case "actions": 
      return h(CardActions, props);
    case "header": 
      return createHeader({ props, h, a, Icon, ListTile });
    case "media": 
      return h(CardMedia, props);
    case "overlay": 
      return createOverlay({ dispatcher, props, h, a });
    case "primary": 
      return h(CardPrimary, props);
    case "text": 
      return createText({ props, h, a });
    case "any": 
      return createAny({ props, h, a });
    default:
      throw(`Content type "${key}" does not exist`);
    }
  };

  const contents = Array.isArray(props.content)
    ? props.content.map(dispatcher)
    : props.content; // deprecated
  const shadowDepth = props.shadowDepth !== undefined
    ? props.shadowDepth
    : props.z; // deprecated

  const content = [
    h(Shadow,
      {
        shadowDepth: shadowDepth !== undefined
          ? shadowDepth
          : 1,
        animated: true,
        key: "shadow"
      }
    ),
    h("div",
      {
        className: classes.content,
        key: "content"
      },
      contents
    ),
    props.children
  ];

  const element = props.element || props.url
    ? "a"
    : "div";

  return h(element, componentProps, content);
};
