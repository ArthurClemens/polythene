import m from "mithril";
import spinner from "polythene-ios-spinner";
import raisedButton from "polythene-raised-button";

spinner.theme(".tests-spinner-themed-ios-spinner", {
  color_light: "green",
  color_dark:  "yellow"
});

const toggle = (spinners = [{}]) => ({
  show: false,
  view: ({ state }) => [
    m(raisedButton, {
      label: "Toggle",
      events: {
        onclick: () => state.show = !state.show
      }
    }),
    m("div",
      {
        style: {
          display: "flex",
          margin: "20px 0 0 0"
        }
      },
      spinners.map(attrs => 
        m("div",
          {
            style: { marginRight: "20px" }
          },
          m(spinner, Object.assign(
            {},
            { show: state.show },
            attrs
          ))
        )
      )
    )
  ]
});

export const tests = [
  {
    name: "Option: permanent",
    component: spinner,
    attrs: {
      permanent: true
    }
  },
  {
    name: "Option: type (small, regular, medium, large, fab)",
    interactive: true,
    component: toggle([
      { type: "small" },
      { type: "regular" },
      { type: "medium" },
      { type: "large" },
      { type: "fab" }
    ])
  },
  {
    name: "Option: raised, z",
    interactive: true,
    component: toggle([
      { raised: true, type: "small" },
      { raised: true, type: "regular" },
      { raised: true, type: "medium" },
      { raised: true, type: "large" },
      { raised: true, type: "fab" }
    ])
  },
  {
    name: "Theme (color)",
    interactive: true,
    component: toggle([{
      class: "tests-spinner-themed-ios-spinner"
    }])
  },
  {
    name: "Option: style (color)",
    interactive: true,
    component: toggle([{
      singleColor: true,
      style: {
        color: "#2196F3"
      }
    }])
  },

  // Dark tone

  {
    name: "No options -- dark tone class",
    interactive: true,
    class: "pe-dark-tone",
    component: toggle()
  },
  {
    name: "Theme (colors) -- dark tone class",
    interactive: true,
    class: "pe-dark-tone",
    component: toggle([{
      class: "tests-spinner-themed-ios-spinner"
    }])
  },
  
];
