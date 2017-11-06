
export default ({ TextField }) => {
  return [
    {
      name: "No options",
      component: TextField
    },
    {
      name: "Option: id",
      component: TextField,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: value",
      component: TextField,
      attrs: {
        value: "QWERTY"
      }
    },
    {
      name: "Option: defaultValue",
      component: TextField,
      attrs: {
        defaultValue: "AZERTY"
      }
    },
    {
      name: "Option: className",
      component: TextField,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: class",
      component: TextField,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: element",
      component: TextField,
      attrs: {
        element: "a"
      }
    },
    
    // Check for various inputs
    
    {
      name: "Option: value is null",
      component: TextField,
      attrs: {
        value: null
      }
    },
    {
      name: "Option: readonly is false",
      component: TextField,
      attrs: {
        readonly: false
      }
    },
  ];
};
