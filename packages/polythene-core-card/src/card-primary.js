import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/card";

export const createProps = (vnode, { keys: k }) => {
  const attrs = vnode.attrs;
  const primaryHasMedia = Array.isArray(attrs.content)
    ? attrs.content.reduce((total, current) =>
      Object.keys(current)[0] === "media"
        ? true
        : total, false)
    : attrs.media || false;
  return Object.assign(
    {},
    filterSupportedAttributes(attrs),
    {
      key: "card-primary",
      className: [
        classes.primary,
        attrs.tight ? classes.primaryTight : null,
        primaryHasMedia ? classes.primaryHasMedia : null,
        attrs.className || attrs[k.class]
      ].join(" ")
    }
  );
};

export const createContent = (vnode, { renderer: h })  => {
  const attrs = vnode.attrs;
  const dispatcher = attrs.dispatcher;
  const primaryDispatch = {
    title: pAttrs => (
      pAttrs.attrs || pAttrs.props
        ? pAttrs || pAttrs.props
        : h("div",
          {
            className: classes.title,
            key: "title"
          },
          [
            pAttrs.title,
            pAttrs.subtitle
              ? h("div",
                { 
                  className: classes.subtitle,
                  key: "subtitle"
                },
                pAttrs.subtitle
              )
              : null
          ]
        )
    ),
    media: pAttrs => {
      return h("div",
        {
          className: classes.primaryMedia,
          key: "media"
        },
        dispatcher({ media: pAttrs })
      );
    },
    actions: pAttrs => dispatcher({ actions: pAttrs })
  };

  return Array.isArray(attrs.content)
    ? attrs.content.map(block => {
      const key = Object.keys(block)[0];
      const pAttrs = block[key];
      return primaryDispatch[key]
        ? primaryDispatch[key](pAttrs)
        : block;
    })
    : [
      attrs.title
        ? primaryDispatch.title({
          title: attrs.title,
          subtitle: attrs.subtitle,
          key: "title"
        })
        : null,
      attrs.media ? primaryDispatch.media(attrs.media) : null,
      attrs.actions ? primaryDispatch.actions(attrs.actions) : null,
      attrs.content
    ];
};
