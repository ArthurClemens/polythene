
export default ({ svg, renderer: h }) => {
  return [
    {
      name: "No options",
      component: svg
    },
    {
      name: "Option: children",
      component: svg,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: svg,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: svg,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: svg,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: svg,
      attrs: {
        className: "class-x"
      }
    },
    {
      name: "Option: className",
      component: svg,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: svg,
      attrs: {
        element: "a"
      }
    },
    
  ];
};

