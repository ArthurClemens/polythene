
export default ({ Shadow, renderer: h }) => {
  return [
    {
      name: "No options",
      component: Shadow
    },
    
    {
      name: "Option: content",
      component: Shadow,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: Shadow,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: Shadow,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: className",
      component: Shadow,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: Shadow,
      attrs: {
        element: "span"
      }
    },
    
  ];
};



