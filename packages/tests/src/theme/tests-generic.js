const alarmSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

export default ({ button, FAB, Icon, IconButton, /*, list, listTile*/ renderer: h }) => {

  const trustedAlarmSVG = h.trust(alarmSVG);

  button.theme(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  button.theme(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  Icon.theme(".tests-custom-theme-red-icon", {
    color_light: "red"
  });

  FAB.theme(".tests-custom-theme-red-fab", {
    color_light_background: "#ff0000",
    color_light: "#fff"
  });

  IconButton.theme(".tests-custom-theme-large-icon-button", {
    padding: 50,
    color_background: "#fff"
  });

  // list.theme(".tests-custom-theme-blue-list", {
  //   color_light_border: "#2196F3"
  // });

  // listTile.theme(".tests-custom-theme-red-list-tile", {
  //   color_light_title: "red"
  // });

  return [
    {
      name: "Theme with style variables: button (should be blue)",
      component: button,
      attrs: {
        className: "tests-custom-theme-blue-button",
        label: "Blue button"
      }
    },
    {
      name: "Theme with style variables: button (should be red)",
      component: button,
      attrs: {
        className: "tests-custom-theme-red-button",
        label: "Red button"
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
      component: FAB,
      attrs: {
        icon: {
          svg: trustedAlarmSVG
        }
      }
    },
    {
      name: "Theme with style variables: FAB (should be red)",
      component: FAB,
      attrs: {
        className: "tests-custom-theme-red-fab",
        icon: {
          svg: trustedAlarmSVG
        }
      }
    },
    {
      name: "Theme with style variables: icon (should be red)",
      component: Icon,
      attrs: {
        className: "tests-custom-theme-red-icon",
        svg: trustedAlarmSVG
      }
    },
    {
      name: "Theme with style variables: icon button (should have large padding)",
      component: IconButton,
      attrs: {
        className: "tests-custom-theme-large-icon-button",
        icon: {
          svg: trustedAlarmSVG
        }
      }
    },
    // {
    //   name: "Theme with style variables: list (should have blue borders)",
    //   component: list,
    //   attrs: {
    //     className: "tests-custom-theme-blue-list",
    //     borders: true,
    //     tiles: [
    //       h(listTile, {
    //         title: "Jennifer Barker",
    //         subtitle: "Starting post doc"
    //       }),
    //       h(listTile, {
    //         title: "Ali Connors",
    //         subtitle: "Brunch this weekend?"
    //       }),
    //       h(listTile, {
    //         title: "Mike Eden",
    //         subtitle: "Watch a game"
    //       })
    //     ]
    //   }
    // },
    // {
    //   name: "Theme with style variables: list tile (should have red titles)",
    //   component: list,
    //   attrs: {
    //     tiles: [
    //       h(listTile, {
    //         className: "tests-custom-theme-red-list-tile",
    //         title: "Jennifer Barker",
    //         subtitle: "Starting post doc"
    //       }),
    //       h(listTile, {
    //         className: "tests-custom-theme-red-list-tile",
    //         title: "Ali Connors",
    //         subtitle: "Brunch this weekend?"
    //       }),
    //       h(listTile, {
    //         className: "tests-custom-theme-red-list-tile",
    //         title: "Mike Eden",
    //         subtitle: "Watch a game"
    //       })
    //     ]
    //   }
    // }
  ];
};
