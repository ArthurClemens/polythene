import { button } from "polythene-button";
import { fab } from "polythene-fab";
import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

export const tests = [
  {
    name: "Theme: button (should be purple)",
    component: button,
    attrs: {
      label: "Button",
      class: "my-button--primary"
    }
  },
  {
    name: "Theme: FAB (should be orange)",
    component: fab,
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
];
