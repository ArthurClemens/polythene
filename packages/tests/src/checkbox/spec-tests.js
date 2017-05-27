
export default ({ Checkbox, keys }) => {
  return [
    {
      name: "No options",
      component: Checkbox
    },
    {
      name: "Option: id",
      component: Checkbox,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: Checkbox,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: Checkbox,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: Checkbox,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: Checkbox,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    {
      name: "Option: value",
      component: Checkbox,
      attrs: {
        name: "worth",
        value: "notable"
      }
    },
  ];
};
