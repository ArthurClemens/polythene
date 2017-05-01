
export default ({ shadow, renderer: h }) => {
  return [
    {
      name: "No options",
      component: shadow
    },
    {
      name: "Option: children",
      component: shadow,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: shadow,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: shadow,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: shadow,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: shadow,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: className",
      component: shadow,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: shadow,
      attrs: {
        element: "span"
      }
    },
    
  ];
};



