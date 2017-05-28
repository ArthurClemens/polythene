
export default ({ RadioButton, keys }) => {
  return [
    {
      name: "No options",
      component: RadioButton
    },
    {
      name: "Option: id",
      component: RadioButton,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: RadioButton,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: RadioButton,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: RadioButton,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: RadioButton,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    {
      name: "Option: value",
      component: RadioButton,
      attrs: {
        name: "worth",
        value: "notable"
      }
    },
  ];
};
