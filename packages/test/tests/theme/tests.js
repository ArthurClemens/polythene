import m from "mithril";
import { button } from "polythene-button";
import { fab } from "polythene-fab";
import { icon } from "polythene-icon";
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
  {
    name: "Theme: Icon (should have larger sizes)",
    component: {
      view: () => [
        m(icon, {
          class: "my-icon",
          msvg: iconAlarm,
          type: "small"
        }),
        m(icon, {
          class: "my-icon",
          msvg: iconAlarm,
          type: "regular"
        }),
        m(icon, {
          class: "my-icon",
          msvg: iconAlarm,
          type: "medium"
        }),
        m(icon, {
          class: "my-icon",
          msvg: iconAlarm,
          type: "large"
        })
      ]
    }
  }
];
