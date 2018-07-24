
export default ({ Button, renderer: h, keys }) => {
  return [
    {
      name: "No options",
      component: Button,
      attrs: {
        raised: true,
      },
    },
    {
      name: "Option: children",
      component: Button,
      attrs: {
        raised: true,
      },
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
        raised: true,
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: Button,
      attrs: {
        raised: true,
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Button,
      attrs: {
        raised: true,
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Button,
      attrs: {
        raised: true,
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Button,
      attrs: {
        raised: true,
        element: "button"
      }
    },
    {
      name: "Option: tabindex",
      component: Button,
      attrs: {
        raised: true,
        [keys.tabindex]: 3
      }
    },
    
  ];
};



