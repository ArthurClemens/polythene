/*
Testing 2 theming methods:
1. Style variables
2. Deriving components
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

button.theme(".tests-custom-theme-blue-button", {
  color_light_background: "#2196F3",
  color_light_text: "#fff"
});

button.theme(".tests-custom-theme-red-button", {
  color_light_background: "#ff0000",
  color_light_text: "#fff"
});

icon.theme(".tests-custom-theme-red-icon", {
  color_light: "red"
});

fab.theme(".tests-custom-theme-red-fab", {
  color_light_background: "#ff0000",
  color_light: "#fff"
});

iconButton.theme(".tests-custom-theme-large-icon-button", {
  padding: 50,
  color_background: "#fff"
});

list.theme(".tests-custom-theme-blue-list", {
  color_light_border: "#2196F3"
});

listTile.theme(".tests-custom-theme-red-list-tile", {
  color_light_title: "red"
});

// [2]

const secondaryButton = {
  theme: button.theme,
  view: vnode => m(button, {
    class: "tests-custom-theme-secondary-button",
    borders: true,
    ...vnode.attrs
  })
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

export const tests = [
  {
    name: "Theme with style variables: button (should be blue)",
    component: button,
    attrs: {
      class: "tests-custom-theme-blue-button",
      label: "Blue button"
    }
  },
  {
    name: "Theme with style variables: button (should be red)",
    component: button,
    attrs: {
      class: "tests-custom-theme-red-button",
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
      class: "tests-custom-theme-red-fab",
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Theme with style variables: icon (should be red)",
    component: icon,
    attrs: {
      class: "tests-custom-theme-red-icon",
      msvg: iconAlarm
    }
  },
  {
    name: "Theme with style variables: icon button (should have large padding)",
    component: iconButton,
    attrs: {
      class: "tests-custom-theme-large-icon-button",
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Theme with style variables: list (should have blue borders)",
    component: list,
    attrs: {
      class: "tests-custom-theme-blue-list",
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
          class: "tests-custom-theme-red-list-tile",
          title: "Jennifer Barker",
          subtitle: "Starting post doc"
        }),
        m(listTile, {
          class: "tests-custom-theme-red-list-tile",
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        }),
        m(listTile, {
          class: "tests-custom-theme-red-list-tile",
          title: "Mike Eden",
          subtitle: "Watch a game"
        })
      ]
    }
  },
];
