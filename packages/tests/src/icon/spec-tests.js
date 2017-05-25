
export default ({ Icon }) => {
  return [
    {
      name: "No options",
      component: Icon
    },
    {
      name: "Option: id",
      component: Icon,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: className",
      component: Icon,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: Icon,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: Icon,
      attrs: {
        element: "a"
      }
    },
  ];
};
