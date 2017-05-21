import { getInitialState, getUpdates, createProps, createContent, onMount, onUnMount, theme, element } from "./menu";
import classes from "./classes";
import vars from "./theme/vars";

export const CoreMenu = {
  theme, element, classes, vars,
  createProps, createContent,
  getInitialState, getUpdates,
  onMount, onUnMount
};
