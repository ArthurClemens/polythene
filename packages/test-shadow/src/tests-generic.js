import interactive from "./components/interactive";

export default ({ Shadow, renderer: h, keys: k }) => {
  return [
    {
      name: "Child node",
      component: Shadow,
      attrs: {},
      children: ["Child"]
    },
    {
      name: "Option: content",
      component: Shadow,
      attrs: {
        content: "Content"
      }
    },
    {
      name: "Option: z (0)",
      component: Shadow,
      attrs: {
        z: 0
      }
    },
    {
      name: "Option: z (1)",
      component: Shadow,
      attrs: {
        z: 1
      }
    },
    {
      name: "Option: z (2)",
      component: Shadow,
      attrs: {
        z: 2
      }
    },
    {
      name: "Option: z (3)",
      component: Shadow,
      attrs: {
        z: 3
      }
    },
    {
      name: "Option: z (4)",
      component: Shadow,
      attrs: {
        z: 4
      }
    },
    {
      name: "Option: z (5)",
      component: Shadow,
      attrs: {
        z: 5
      }
    },

    {
      name: "Add to an element",
      component: {
        view: () => 
          h("div", [
            h("div", "Some element"),
            h(Shadow)
          ])
      },
    },

    {
      name: "Interactive option: animated",
      interactive: true,
      exclude: true,
      component: interactive({ h, k, Shadow })
    },

    // Dark tone

    {
      name: "Interactive option: animated -- dark tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: interactive({ h, k, Shadow })
    },
  ];
};


