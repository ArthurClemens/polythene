import interactive from "./components/interactive";
import { ShadowCSS } from "polythene-css";

export default ({ Shadow, renderer: h, keys: k }) => {

  ShadowCSS.addStyle(".tests-shadow-themed-shadow", {
    shadow_bottom_depth_1: "10px 10px 10px 0px rgba(45,58,112,.5)"
  });

  ShadowCSS.addStyle(".tests-shadow-set-shadow", {
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
      name: "Themed",
      component: Shadow,
      attrs: {
        z: 1,
        className: "tests-shadow-themed-shadow"
      }
    },
    {
      name: "Themed (set shadow depth to 3, using a theme)",
      component: Shadow,
      attrs: {
        className: "tests-shadow-set-shadow"
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

    // Dark tone

    {
      name: "Interactive option: animated -- dark tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: interactive({ h, k, Shadow })
    },
  ];
};


