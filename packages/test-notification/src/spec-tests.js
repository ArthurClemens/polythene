
export default ({ NotificationInstance, renderer, keys,  }) => {
  return [
    {
      name: "No options - spec",
      component: NotificationInstance
    },
    {
      name: "Option: id - spec",
      component: NotificationInstance,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class - spec",
      component: NotificationInstance,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className - spec",
      component: NotificationInstance,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element - spec",
      component: NotificationInstance,
      attrs: {
        element: "a"
      }
    },
  ];
};

