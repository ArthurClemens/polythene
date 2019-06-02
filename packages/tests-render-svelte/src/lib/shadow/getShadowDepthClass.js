import classes from "polythene-css-classes/shadow";

export const getShadowDepthClass = shadowDepth => (
  shadowDepth !== undefined
    ? `${classes.depth_n}${Math.min(5, shadowDepth)}`
    : undefined
);
