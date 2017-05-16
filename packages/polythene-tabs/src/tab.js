import m from "mithril";
import { Icon, Button } from "polythene-mithril";
import classes from "./classes";

const view = vnode => {
  const attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events.onclick = attrs.events.onclick || (() => {});
  const tabButtonOptions = Object.assign(
    {},
    attrs,
    {
      content: m("div", { class: classes.tabContent }, [
        attrs.icon ? m(Icon, attrs.icon) : null,
        attrs.label
          ? m("div", { class: classes.label }, m("span", attrs.label))
          : null,
      ]),
      class: [
        classes.tab,
        attrs.icon && attrs.label ? classes.tabHasIcon : null,
        attrs.class
      ].join(" "),
      selected: attrs.selected,
      wash: false,
      ripple: true,
      events: Object.assign(
        {},
        attrs.events,
        {
          onclick: e => {
            attrs.onSelect();
            attrs.events.onclick(e);
          }
        }
      ),
      oncreate: vnode => attrs.register(attrs.index, {
        data: attrs,
        el: vnode.dom
      })
    }
  );
  return m(Button, tabButtonOptions);
};

export default {
  view
};
