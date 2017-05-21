export default ({ Menu, List, ListTile, renderer: h }) => {

  const themeColor = "#2196F3";
  Menu.theme(".menu-tests-blue-menu", {
    color_light_background: themeColor,
    border_radius: 0
  });
  ListTile.theme(".menu-tests-blue-menu-list-tile", {
    color_light_title: "#fff",
    color_light_background: themeColor
  });

  // const themedSimpleMenuContent = h(List, [
  //   h(ListTile, {
  //     title: "Yes",
  //     ink: true,
  //     class: "menu-tests-blue-menu-list-tile"
  //   }),
  //   h(ListTile, {
  //     title: "No",
  //     ink: true,
  //     class: "menu-tests-blue-menu-list-tile"
  //   })
  // ]);

  // const styledSimpleMenuContent = h(List, [
  //   h(ListTile, {
  //     title: "Yes",
  //     ink: true,
  //     style: {
  //       backgroundColor: themeColor,
  //       color: "#fff"
  //     }
  //   }),
  //   h(ListTile, {
  //     title: "No",
  //     ink: true,
  //     style: {
  //       backgroundColor: themeColor,
  //       color: "#fff"
  //     }
  //   })
  // ]);

  return [

    
  ];
};


