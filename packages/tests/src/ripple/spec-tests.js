
export default ({ Ripple }) => {
  return [
    {
      name: "No options",
      component: Ripple
    },
    {
      name: "Option: id",
      component: Ripple,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: Ripple,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: Ripple,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: Ripple,
      attrs: {
        element: "a"
      }
    },
  ];
};
