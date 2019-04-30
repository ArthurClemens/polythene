import classes from "polythene-css-classes/tabs";

export const _Tab = ({ h, a, Button, Icon, ...props }) => {

  // Let internal onclick function co-exist with passed button option
  const events = props.events || {};
  events[a.onclick] = events[a.onclick] || (() => {});

  const componentProps = Object.assign({}, 
    props,
    props.testId && { "data-test-id": props.testId },
    {
      "data-index": props.index,
      content: h("div",
        { className: classes.tabContent },
        [
          props.icon ? h(Icon, props.icon) : null,
          props.label
            ? h("div",
              { className: classes.label },
              h("span", props.label)
            )
            : null,
        ]),
      className: [
        classes.tab,
        props.icon && props.label ? classes.tabHasIcon : null,
        props.className || props[a.class],
      ].join(" "),
      selected: props.selected,
      wash: false,
      ripple: true,
      events: Object.assign(
        {},
        events,
        {
          [a.onclick]: e => {
            props.onSelect();
            events[a.onclick](e);
          }
        }
      )
    }
  );

  const content = props.children;
  return h(Button, componentProps, content);
};
