import classes from "polythene-css-classes/tabs";

// Don't export 'element': it will be the wrapped Button component (set in polythene-xxx-tabs/tab)

export const onMount = vnode => {
  const dom = vnode.dom;
  if (!dom) {
    return;
  }
  const attrs = vnode.attrs;
  attrs.register(attrs.index, {
    attrs,
    dom
  });
};

export const createProps = (vnode, { renderer: h, keys: k, Icon }) => {
  const attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events[k.onclick] = attrs.events[k.onclick] || (() => {});
  return Object.assign(
    {},
    attrs,
    {
      content: h("div",
        { className: classes.tabContent },
        [
          attrs.icon ? h(Icon, attrs.icon) : null,
          attrs.label
            ? h("div",
              { className: classes.label },
              h("span", attrs.label)
            )
            : null,
        ]),
      className: [
        classes.tab,
        attrs.icon && attrs.label ? classes.tabHasIcon : null,
        attrs.className || attrs[k.class],
      ].join(" "),
      selected: attrs.selected,
      wash: false,
      ripple: true,
      events: Object.assign(
        {},
        attrs.events,
        {
          [k.onclick]: e => {
            attrs.onSelect();
            attrs.events[k.onclick](e);
          }
        }
      )
    }
  );
};

export const createContent = () => null;
