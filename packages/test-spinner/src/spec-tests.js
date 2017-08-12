
export default ({ MaterialDesignSpinner, IOSSpinner, renderer: h }) => {
  return [
    {
      name: "No options",
      component: MaterialDesignSpinner,
      attrs: {
        permanent: true
      }
    },
    
    {
      name: "Option: content -- Material Design Spinner",
      component: MaterialDesignSpinner,
      attrs: {
        content: h("span", {key: "content"}, "Content"),
        permanent: true
      }
    },
    {
      name: "Option: id -- Material Design Spinner",
      component: MaterialDesignSpinner,
      attrs: {
        id: "id-x",
        permanent: true
      }
    },
    {
      name: "Option: class -- Material Design Spinner",
      component: MaterialDesignSpinner,
      attrs: {
        className: "class-x",
        permanent: true
      }
    },
    {
      name: "Option: className -- Material Design Spinner",
      component: MaterialDesignSpinner,
      attrs: {
        className: "className-x",
        permanent: true
      }
    },
    {
      name: "Option: element -- Material Design Spinner",
      component: MaterialDesignSpinner,
      attrs: {
        element: "span",
        permanent: true
      }
    },

    {
      name: "No options -- iOS Spinner",
      component: IOSSpinner,
      attrs: {
        permanent: true
      }
    },
    
    {
      name: "Option: content -- iOS Spinner",
      component: IOSSpinner,
      attrs: {
        content: h("span", {key: "content"}, "Content"),
        permanent: true
      }
    },
    {
      name: "Option: id -- iOS Spinner",
      component: IOSSpinner,
      attrs: {
        id: "id-x",
        permanent: true
      }
    },
    {
      name: "Option: class -- iOS Spinner",
      component: IOSSpinner,
      attrs: {
        className: "class-x",
        permanent: true
      }
    },
    {
      name: "Option: className -- iOS Spinner",
      component: IOSSpinner,
      attrs: {
        className: "className-x",
        permanent: true
      }
    },
    {
      name: "Option: element -- iOS Spinner",
      component: IOSSpinner,
      attrs: {
        element: "span",
        permanent: true
      }
    },
    
  ];
};



