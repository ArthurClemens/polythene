import { coreNotificationInstance } from "polythene-core-notification";
import { customTheme } from "./theme";

export const coreSnackbarInstance = Object.assign(
  {},
  coreNotificationInstance,
  {
    theme: customTheme
  }
);
