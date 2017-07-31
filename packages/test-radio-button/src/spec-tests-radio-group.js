
const genericButtons = [
  {
    value: "One",
    label: "One",
  },
  {
    value: "Two",
    label: "Two",
  }
];

export default ({ renderer: h, RadioGroup }) => {
  return [
    {
      name: "No options - RadioGroup",
      component: RadioGroup
    },
    {
      name: "Option: buttons - RadioGroup",
      component: RadioGroup,
      attrs: {
        name: "label",
        buttons: genericButtons
      }
    },
    {
      name: "Option: id - RadioGroup",
      component: RadioGroup,
      attrs: {
        id: "id-x",
        buttons: genericButtons
      }
    },
    {
      name: "Option: className - RadioGroup",
      component: RadioGroup,
      attrs: {
        className: "className-x",
        buttons: genericButtons
      }
    },
    {
      name: "Option: class - RadioGroup",
      component: RadioGroup,
      attrs: {
        className: "class-x",
        buttons: genericButtons
      }
    },
    {
      name: "Option: element - RadioGroup",
      component: RadioGroup,
      attrs: {
        element: "a",
        buttons: genericButtons
      }
    },
    {
      name: "Option: style - RadioGroup",
      component: RadioGroup,
      attrs: {
        style: {
          color: "red",
          buttons: genericButtons
        }
      }
    },
    {
      name: "Option: before - RadioGroup",
      component: RadioGroup,
      attrs: {
        after: h("div", "Before"),
        buttons: genericButtons
      }
    },
    {
      name: "Option: after - RadioGroup",
      component: RadioGroup,
      attrs: {
        after: h("div", "After"),
        buttons: genericButtons
      }
    },
  ];
};
