/*
Testing 3 theming methods:
1. Style variables
2. Deriving components
3. Theme file
*/

import m from "mithril";
import { button } from "polythene-button";
import { fab } from "polythene-fab";
import { icon } from "polythene-icon";
import { iconButton } from "polythene-icon-button";
import { list } from "polythene-list";
import { listTile } from "polythene-list-tile";
import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

// [1]

button.theme("blue-button", {
  color_light_flat_normal_background: "#2196F3",
  color_light_flat_normal_text: "#fff"
});

button.theme("red-button", {
  color_light_flat_normal_background: "#ff0000",
  color_light_flat_normal_text: "#fff"
});

icon.theme("red-icon", {
  color: "red"
});

fab.theme("red-fab", {
  color_light_background: "#ff0000",
  color_light_text: "#fff"
});

iconButton.theme("large-icon-button", {
  padding: 50,
  color_background: "#fff"
});

list.theme("blue-list", {
  color_light_border: "#2196F3"
});

listTile.theme("red-list-tile", {
  color_light_title: "red"
});

// [2]

const secondaryButton = {
  theme: button.theme,
  view: vnode => m(button, {
    class: "secondary-button",
    borders: true,
    ...vnode.attrs
  })
};
secondaryButton.theme("secondary-button", {
  color_light_flat_normal_border: "#ddd",
  color_light_flat_normal_background: "#fff"
});

// [3]
// Set in theme file ./theme.js:
// classes: my-button--primary and my-icon


export const tests = [
  {
    name: "Theme with style variables: button (should be blue)",
    component: button,
    attrs: {
      class: "blue-button",
      label: "Blue button"
    }
  },
  {
    name: "Theme with style variables: button (should be red)",
    component: button,
    attrs: {
      class: "red-button",
      label: "Red button"
    }
  },
  {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  },
  {
    name: "No theme: normal button",
    component: button,
    attrs: {
      label: "Unaffected button"
    }
  },
  {
    name: "Theme with theme file: button (should be purple)",
    component: button,
    attrs: {
      label: "Purple button",
      class: "my-button--primary"
    }
  },
  {
    name: "Theme with theme file (global primary color): FAB (should be orange)",
    component: fab,
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Theme with style variables: FAB (should be red)",
    component: fab,
    attrs: {
      class: "red-fab",
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Theme with style variables: icon (should be red)",
    component: icon,
    attrs: {
      class: "red-icon",
      msvg: iconAlarm
    }
  },
  {
    name: "Theme with theme file: icon (should have larger sizes)",
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
  },
  {
    name: "Theme with style variables: icon button (should have large padding)",
    component: iconButton,
    attrs: {
      class: "large-icon-button",
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Theme with style variables: list (should have blue borders)",
    component: list,
    attrs: {
      class: "blue-list",
      borders: true,
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc"
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        }),
        m(listTile, {
          title: "Mike Eden",
          subtitle: "Watch a game"
        })
      ]
    }
  },
  {
    name: "Theme with style variables: list tile (should have red titles)",
    component: list,
    attrs: {
      tiles: [
        m(listTile, {
          class: "red-list-tile",
          title: "Jennifer Barker",
          subtitle: "Starting post doc"
        }),
        m(listTile, {
          class: "red-list-tile",
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        }),
        m(listTile, {
          class: "red-list-tile",
          title: "Mike Eden",
          subtitle: "Watch a game"
        })
      ]
    }
  },
];
