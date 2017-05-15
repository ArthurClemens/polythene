
export default ({ FAB, keys }) => {
  return [
    {
      name: "No options",
      component: FAB
    },
    {
      name: "Option: id",
      component: FAB,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: FAB,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: FAB,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: element",
      component: FAB,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: FAB,
      attrs: {
        [keys.tabindex]: 3
      }
    },
  ];
};
