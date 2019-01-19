import notificationClasses from "./notification";

export default {
  ...notificationClasses,

  component:      "pe-notification pe-snackbar",

  // elements
  holder:         "pe-snackbar__holder",
  placeholder:    "pe-snackbar__placeholder",

  // states
  open:           "pe-snackbar--open",
};
