import interactive from "./components/interactive";
import { ShadowCSS } from "polythene-css";

export default ({ Shadow, renderer: h, keys: k }) => {

  ShadowCSS.addStyle(".tests-shadow-themed-shadow", {
    shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
  });

  ShadowCSS.addStyle(".tests-shadow-themed-behavior-shadow", {
    shadow_depth: 3
  });


  return [
    // {
    //   name: "Child node",
    //   component: Shadow,
    //   attrs: {},
    //   children: ["Child"]
    // },
    {
      name: "Option: content",
      component: Shadow,
      attrs: {
        content: "Content"
      }
    },
    {
      name: "Option: shadowDepth (0)",
      component: Shadow,
      attrs: {
        shadowDepth: 0
      }
    },
    {
      name: "Option: shadowDepth (1)",
      component: Shadow,
      attrs: {
        shadowDepth: 1
      }
    },
    {
      name: "Option: shadowDepth (2)",
      component: Shadow,
      attrs: {
        shadowDepth: 2
      }
    },
    {
      name: "Option: shadowDepth (3)",
      component: Shadow,
      attrs: {
        shadowDepth: 3
      }
    },
    {
      name: "Option: shadowDepth (4)",
      component: Shadow,
      attrs: {
        shadowDepth: 4
      }
    },
    {
      name: "Option: shadowDepth (5)",
      component: Shadow,
      attrs: {
        shadowDepth: 5
      }
    },
    {
      name: "Themed",
      component: Shadow,
      attrs: {
        shadowDepth: 1,
        className: "tests-shadow-themed-shadow"
      }
    },
    {
      name: "Add to an element (default depth)",
      component: {
        view: () => 
          h("div", [
            h(".absolute.absolute--fill",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                },
              },
              "Some element"
            ),
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

    // Themed behavior

    {
      name: "Themed behavior: set shadow depth to 3",
      component: Shadow,
      attrs: {
        className: "tests-shadow-themed-behavior-shadow"
      }
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


