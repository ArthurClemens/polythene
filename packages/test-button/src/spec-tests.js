
export default ({ Button, renderer: h, keys }) => {
  return [
    {
      name: "No options",
      component: Button
    },
    {
      name: "Option: children",
      component: Button,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: Button,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: Button,
      attrs: {
        content: h("span", "Content")
      }
    },
    {
      name: "Option: id",
      component: Button,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Button,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Button,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Button,
      attrs: {
        element: "Button"
      }
    },
    {
      name: "Option: tabindex",
      component: Button,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    {
      name: "Option: before",
      component: Button,
      attrs: {
        before: h("span", "Before")
      }
    },
    {
      name: "Option: after",
      component: Button,
      attrs: {
        after: h("span", "After")
      }
    },
  ];
};
