// import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

export default ({ button/*, fab, icon, iconButton, list, listTile, renderer: h*/ }) => {
  button.theme(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  button.theme(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  // icon.theme(".tests-custom-theme-red-icon", {
  //   color_light: "red"
  // });

  // fab.theme(".tests-custom-theme-red-fab", {
  //   color_light_background: "#ff0000",
  //   color_light: "#fff"
  // });

  // iconButton.theme(".tests-custom-theme-large-icon-button", {
  //   padding: 50,
  //   color_background: "#fff"
  // });

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
    // {
    //   name: "Theme with theme file (global primary color): FAB (should be orange)",
    //   component: fab,
    //   attrs: {
    //     icon: {
    //       msvg: iconAlarm
    //     }
    //   }
    // },
    // {
    //   name: "Theme with style variables: FAB (should be red)",
    //   component: fab,
    //   attrs: {
    //     className: "tests-custom-theme-red-fab",
    //     icon: {
    //       msvg: iconAlarm
    //     }
    //   }
    // },
    // {
    //   name: "Theme with style variables: icon (should be red)",
    //   component: icon,
    //   attrs: {
    //     className: "tests-custom-theme-red-icon",
    //     msvg: iconAlarm
    //   }
    // },
    // {
    //   name: "Theme with style variables: icon button (should have large padding)",
    //   component: iconButton,
    //   attrs: {
    //     className: "tests-custom-theme-large-icon-button",
    //     icon: {
    //       msvg: iconAlarm
    //     }
    //   }
    // },
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
