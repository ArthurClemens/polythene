import m from "mithril";
import spinner from "polythene-md-spinner";
import raisedButton from "polythene-raised-button";

spinner.theme(".tests-spinner-themed-spinner", {
  color_light_1: "orange",
  color_light_2: "red",
  color_light_3: "orange",
  color_light_4: "red",
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
    name: "No options",
    component: toggle()
  },
  {
    name: "Option: permanent",
    component: spinner,
    attrs: {
      permanent: true
    }
  },
  {
    name: "Option: raised, z",
    component: toggle([
      {
        raised: true,
        z: 0
      },
      {
        raised: true,
        z: 1
      },
      {
        raised: true,
        z: 2
      },
      {
        raised: true,
        z: 3
      },
      {
        raised: true,
        z: 4
      },
      {
        raised: true,
        z: 5
      }
    ])
  },
  {
    name: "Option: type (small, regular, medium, large, fab)",
    component: toggle([
      { type: "small" },
      { type: "regular" },
      { type: "medium" },
      { type: "large" },
      { type: "fab" }
    ])
  },
  {
    name: "Theme (color)",
    component: toggle([{
      class: "tests-spinner-themed-spinner"
    }])
  },
  {
    name: "Style (color)",
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
    class: "pe-dark-tone",
    component: toggle()
  }
  
];
