
export default ({ Switch, keys }) => {
  return [
    {
      name: "No options",
      component: Switch
    },
    {
      name: "Option: id",
      component: Switch,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: Switch,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: Switch,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: Switch,
      attrs: {
        element: "a"
      }
    },
    {
      name: "Option: tabindex",
      component: Switch,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    {
      name: "Option: value",
      component: Switch,
      attrs: {
        name: "worth",
        value: "notable"
      }
    },
  ];
};
