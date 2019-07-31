import classes from "polythene-css-classes/ios-spinner";

const blade = (num, h) =>
  h("div", {
    // key: `blade-${num}`,
    className: classes.blade
  });

export const _Spinner = ({ h, BaseSpinner, ...props }) => {
  const content = props.content || h("div",
    {
      // key: "content",
      className: classes.blades
    },
    [0,1,2,3,4,5,6,7,8,9,10,11].map(num => blade(num, h))
  );
  const componentProps = Object.assign({},
    props,
    {
      className: [classes.component, props.className].join(" "),
      content
    }
  );
  return h(BaseSpinner, componentProps);
};
