import { classes as notificationClasses } from "polythene-notification";

export default Object.assign(
  {},
  notificationClasses,
  {
    component:      "pe-notification pe-snackbar",
    holder:         "pe-snackbar__holder",
    placeholder:    "pe-snackbar__placeholder",
    open:           "pe-snackbar--open"
  }
);
