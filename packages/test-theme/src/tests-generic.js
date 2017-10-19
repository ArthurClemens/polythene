import { ButtonCSS, IconCSS, FABCSS, IconButtonCSS, ListCSS, ListTileCSS } from "polythene-css";

const alarmSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

export default ({ Button, FAB, Icon, IconButton, List, ListTile, renderer: h }) => {

  const trustedAlarmSVG = h.trust(alarmSVG);

  ButtonCSS.addStyle(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  ButtonCSS.addStyle(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  IconCSS.addStyle(".tests-custom-theme-red-icon", {
    color_light: "red"
  });

  FABCSS.addStyle(".tests-custom-theme-red-fab", {
    color_light_background: "#ff0000",
    color_light: "#fff"
  });

  IconButtonCSS.addStyle(".tests-custom-theme-large-icon-button", {
    padding: 50,
    color_background: "#fff"
  });

  ListCSS.addStyle(".tests-custom-theme-blue-list", {
    color_light_border: "#2196F3"
  });

  ListTileCSS.addStyle(".tests-custom-theme-red-list-tile", {
    color_light_title: "red"
  });

  return [
    {
      section: "Style variables",
    },
    {
      name: "Theme with style variables: button (should be blue)",
      component: Button,
      attrs: {
        className: "tests-custom-theme-blue-button",
        label: "Blue button"
      }
    },
    {
      name: "Theme with style variables: button (should be red)",
      component: Button,
      attrs: {
        className: "tests-custom-theme-red-button",
        label: "Red button"
      }
    },
    {
      name: "No theme: normal button",
      component: Button,
      attrs: {
        label: "Unaffected button"
      }
    },
    {
      name: "Theme with style variables: FAB (should be red)",
      component: FAB,
      attrs: {
        className: "tests-custom-theme-red-fab",
        icon: {
          svg: { content: trustedAlarmSVG }
        }
      }
    },
    {
      name: "Theme with style variables: icon (should be red)",
      component: Icon,
      attrs: {
        className: "tests-custom-theme-red-icon",
        svg: { content: trustedAlarmSVG }
      }
    },
    {
      name: "Theme with style variables: icon button (should have large padding)",
      component: IconButton,
      attrs: {
        className: "tests-custom-theme-large-icon-button",
        icon: {
          svg: { content: trustedAlarmSVG }
        }
      }
    },
    {
      name: "Theme with style variables: list (should have blue borders)",
      component: List,
      attrs: {
        className: "tests-custom-theme-blue-list",
        borders: true,
        tiles: [
          h(ListTile, {
            title: "Jennifer Barker",
            subtitle: "Starting post doc"
          }),
          h(ListTile, {
            title: "Ali Connors",
            subtitle: "Brunch this weekend?"
          }),
          h(ListTile, {
            title: "Mike Eden",
            subtitle: "Watch a game"
          })
        ]
      }
    },
    {
      name: "Theme with style variables: list tile (should have red titles)",
      component: List,
      attrs: {
        tiles: [
          h(ListTile, {
            className: "tests-custom-theme-red-list-tile",
            title: "Jennifer Barker",
            subtitle: "Starting post doc"
          }),
          h(ListTile, {
            className: "tests-custom-theme-red-list-tile",
            title: "Ali Connors",
            subtitle: "Brunch this weekend?"
          }),
          h(ListTile, {
            className: "tests-custom-theme-red-list-tile",
            title: "Mike Eden",
            subtitle: "Watch a game"
          })
        ]
      }
    },
    // {
    //   section: "Theme file",
    // },
    // {
    //   name: "Button styled in theme file",
    //   component: Button,
    //   attrs: {
    //     className: "button-custom-theme",
    //     label: "Button"
    //   }
    // },
  ];
};
