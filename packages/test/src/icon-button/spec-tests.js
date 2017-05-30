
export default ({ IconButton, keys }) => {
  return [
    {
      name: "No options",
      component: IconButton
    },
    {
      name: "Option: id",
      component: IconButton,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: IconButton,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: IconButton,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: IconButton,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: IconButton,
      attrs: {
        [keys.tabindex]: 3
      }
    },
  ];
};
