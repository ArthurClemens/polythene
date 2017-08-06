
export default ({ SnackbarInstance }) => {
  return [
    {
      name: "No options - spec",
      component: SnackbarInstance
    },
    {
      name: "Option: id - spec",
      component: SnackbarInstance,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class - spec",
      component: SnackbarInstance,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className - spec",
      component: SnackbarInstance,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element - spec",
      component: SnackbarInstance,
      attrs: {
        element: "a"
      }
    },
  ];
};
