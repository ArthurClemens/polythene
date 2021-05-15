import { filterSupportedAttributes, processDataset } from "polythene-core";
import classes from "polythene-css-classes/card";

export const _CardPrimary = ({ h, a, ...props }) => {
  const primaryHasMedia = Array.isArray(props.content)
    ? props.content.reduce(
        (total, current) =>
          Object.keys(current)[0] === "media" ? true : total,
        false
      )
    : props.media || false;

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    processDataset(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.primary,
        props.tight ? classes.primaryTight : null,
        primaryHasMedia ? classes.primaryHasMedia : null,
        props.className || props[a.class],
      ].join(" "),
    },
    props.events
  );

  const dispatcher = props.dispatcher;
  const primaryDispatch = {
    title: (pAttrs) =>
      pAttrs.attrs || // Mithril
      pAttrs.props // React
        ? pAttrs || pAttrs.props
        : h(
            "div",
            {
              className: classes.title,
              style: pAttrs.style,
            },
            [
              pAttrs.title,
              pAttrs.subtitle
                ? h(
                    "div",
                    {
                      className: classes.subtitle,
                    },
                    pAttrs.subtitle
                  )
                : null,
            ]
          ),
    media: (pAttrs) => {
      return h(
        "div",
        {
          className: classes.primaryMedia,
          style: pAttrs.style,
        },
        dispatcher({ media: pAttrs })
      );
    },
    actions: (pAttrs) => dispatcher({ actions: pAttrs }),
  };

  const content = Array.isArray(props.content)
    ? props.content.map((block) => {
        const key = Object.keys(block)[0];
        const pAttrs = block[key];
        return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
      })
    : [
        props.title
          ? primaryDispatch.title({
              title: props.title,
              subtitle: props.subtitle,
            })
          : null,
        props.media ? primaryDispatch.media(props.media) : null,
        props.actions ? primaryDispatch.actions(props.actions) : null,
        props.content,
      ];

  return h(props.element || "div", componentProps, content);
};
