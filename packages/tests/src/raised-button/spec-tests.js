
export default ({ raisedButton, renderer: h, keys }) => {
  return [
    {
      name: "No options",
      component: raisedButton
    },
    {
      name: "Option: children",
      component: raisedButton,
      children: [h("span", "Child")]
    },
    // Does not work in snapshots
    // {
    //   name: "Option: children as attribute",
    //   component: raisedButton,
    //   attrs: {
    //     children: h("span", "Child")
    //   }
    // },
    {
      name: "Option: content",
      component: raisedButton,
      attrs: {
        content: h("span", {key: "content"}, "Content")
      }
    },
    {
      name: "Option: id",
      component: raisedButton,
      attrs: {
        id: "id-x"
      }
    },
    {
      name: "Option: class",
      component: raisedButton,
      attrs: {
        class: "class-x"
      }
    },
    {
      name: "Option: className",
      component: raisedButton,
      attrs: {
        className: "className-x"
      }
    },
    {
      name: "Option: element",
      component: raisedButton,
      attrs: {
        element: "button"
      }
    },
    {
      name: "Option: tabindex",
      component: raisedButton,
      attrs: {
        [keys.tabindex]: 3
      }
    },
    
  ];
};



