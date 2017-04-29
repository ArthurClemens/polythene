
export default ({ button, renderer: h }) => {
  return [
    {
      name: "No options",
      component: button
    },
    {
      name: "Option: children",
      component: button,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: button,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: button,
      attrs: {
        content: h("span", "Content")
      }
    },
    {
      name: "Option: id",
      component: button,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: button,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: className",
      component: button,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: button,
      attrs: {
        element: "button"
      }
    },
    {
      name: "Option: tabindex",
      component: button,
      attrs: {
        tabindex: 3
      }
    },
    {
      name: "Option: before",
      component: button,
      attrs: {
        before: h("span", "Before")
      }
    },
    {
      name: "Option: after",
      component: button,
      attrs: {
        after: h("span", "After")
      }
    },
  ];
};
