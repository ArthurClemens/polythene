
export default ({ fab, keys }) => {
  return [
    {
      name: "No options",
      component: fab
    },
    {
      name: "Option: id",
      component: fab,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: fab,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: fab,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: element",
      component: fab,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: fab,
      attrs: {
        [keys.tabindex]: "a"
      }
    },
  ];
};
