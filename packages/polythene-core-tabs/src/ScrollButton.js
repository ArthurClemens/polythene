import classes from "polythene-css-classes/tabs";

const arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
const arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

export const _ScrollButton = ({ h, a, IconButton, ...props }) => {

  const icon = props.position === "start"
    ? props.icon || { svg: { content: h.trust(props.isRTL ? arrowForward : arrowBackward) } }
    : props.icon || { svg: { content: h.trust(props.isRTL ? arrowBackward : arrowForward) } };

  const componentProps = Object.assign({}, 
    {
      className: [
        classes.scrollButton,
        props.className || props[a.class]
      ].join(" "),
      icon,
      ripple: { center: true },
      events: props.events,
    }
  );
  return h(IconButton, componentProps);
};

