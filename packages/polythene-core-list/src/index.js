import { filterSupportedAttributes } from "polythene-core";
import classes from "polythene-css-classes/list";

const paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

const paddingClass = (attr = "both") =>
  paddingClasses[attr];

export const _List = ({ h, a, ListTile, ...props }) => {

  const componentProps = Object.assign(
    {},
    filterSupportedAttributes(props),
    props.testId && { "data-test-id": props.testId },
    {
      className: [
        classes.component,
        (props.border || props.borders) ? classes.border : null,
        (props.indentedBorder || props.indentedBorders) ? classes.indentedBorder : null,
        props.header ? classes.hasHeader : null,
        props.compact ? classes.compact : null,
        paddingClass(props.padding),
        props.tone === "dark" ? "pe-dark-tone" : null,
        props.tone === "light" ? "pe-light-tone" : null,
        props.className || props[a.class],
      ].join(" "),
    }
  );

  let headerOpts;
  if (props.header) {
    headerOpts = Object.assign(
      {},
      props.header
    );
    headerOpts[a.class] = [
      classes.header,
      headerOpts[a.class] || null
    ].join(" ");
  }
  const tiles = props.tiles
    ? props.tiles
    : props.content
      ? props.content
      : props.children;
  const contents = [
    headerOpts
      ? h(ListTile, {
        key: "header",
        ...props.all,
        ...headerOpts,
        header: true
      })
      : undefined,
    props.all
      ? tiles.map(tileOpts => 
        h(ListTile, {
          ...props.all,
          ...tileOpts
        })
      )
      : tiles
  ];
  const content = [
    props.before,
    contents,
    props.after
  ];
  return h(props.element || "div", componentProps, content);
};
