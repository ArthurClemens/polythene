
export default ({ iconButton, keys }) => {
  return [
    {
      name: "No options",
      component: iconButton
    },
    {
      name: "Option: id",
      component: iconButton,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: iconButton,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: iconButton,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: element",
      component: iconButton,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: iconButton,
      attrs: {
        [keys.tabindex]: 3
      }
    },
  ];
};
