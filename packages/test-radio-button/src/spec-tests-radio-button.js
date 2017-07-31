
export default ({ RadioButton, keys }) => {
  return [
    {
      name: "No options - RadioButton",
      component: RadioButton,
      attrs: {
        value: "1"
      }
    },
    {
      name: "Option: id - RadioButton",
      component: RadioButton,
      attrs: {
        id: "id-x",
        value: "1"
      }
    },
    {
      name: "Option: className - RadioButton",
      component: RadioButton,
      attrs: {
        className: "className-x",
        value: "1"
      }
    },
    {
      name: "Option: class - RadioButton",
      component: RadioButton,
      attrs: {
        className: "class-x",
        value: "1"
      }
    },
    {
      name: "Option: element - RadioButton",
      component: RadioButton,
      attrs: {
        element: "a",
        value: "1"
      }
    },
    {
      name: "Option: tabindex - RadioButton",
      component: RadioButton,
      attrs: {
        [keys.tabindex]: 3,
        value: "1"
      }
    },
    {
      name: "Option: value - RadioButton",
      component: RadioButton,
      attrs: {
        name: "worth",
        value: "notable"
      }
    },
  ];
};
