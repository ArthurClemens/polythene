import m from "mithril";
import spinner from "polythene-md-end-spinner";
import raisedButton from "polythene-raised-button";
import slider from "polythene-slider";

const STEP_DURATION = 2000;

spinner.theme(".tests-spinner-themed-spinner", {
  color_light: "green",
  color_dark: "yellow"
});

const oninit = vnode => {
  let start = null;

  vnode.state.percentage = 0;
  vnode.state.resetStep = () => {
    start = null;
  };

  vnode.state.step = timestamp => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    vnode.state.percentage = Math.min(1, 1.0 / STEP_DURATION * progress);
    
    m.redraw();
    if (progress < STEP_DURATION) {
      window.requestAnimationFrame(vnode.state.step);
    }
  };
};

const toggle = (spinners = [{}]) => ({
  show: true,
  percentage: 0,
  oninit,
  view: ({ state }) => [
    m(raisedButton, {
      label: "Run",
      events: {
        onclick: () => (state.resetStep(), window.requestAnimationFrame(state.step))
      }
    }),
    m("div",
      {
        style: {
          display: "flex",
          width: "100%",
          margin: "20px 0 0 0"
        }
      },
      spinners.map(attrs => 
        m("div",
          {
            style: {
              marginRight: "20px",
              width: "100%"
            }
          },
          m(spinner, Object.assign(
            {},
            {
              show: state.show,
              percentage: state.percentage
            },
            attrs
          ))
        )
      )
    )
  ]
});

const toggleSlider = attrs => ({
  show: true,
  percentage: 0,
  oninit,
  view: ({ state }) => [
    m("div",
      {
        style: {
          display: "flex",
          width: "100%",
          margin: "0 0 20px 0"
        }
      },
      m(slider, {
        min: 0,
        max: 1,
        step: 0,
        value: () => state.percentage,
        getValue: value => state.percentage = value,
        after: m(spinner, Object.assign(
          {},
          {
            show: state.show,
            percentage: state.percentage,
            class: "self-center"
          },
          attrs
        ))
      })
    ),
    m(raisedButton, {
      label: "Run",
      events: {
        onclick: () => (state.resetStep(), window.requestAnimationFrame(state.step))
      }
    })
  ]
});

export const tests = [
  {
    name: "Option: permanent, percentage (0.5)",
    component: spinner,
    attrs: {
      percentage: .5,
      permanent: true
    }
  },
  {
    name: "Interactive (no animation)",
    interactive: true,
    component: toggleSlider({
      show: true
    })
  },
  {
    name: "Interactive (animated, updateDuration)",
    interactive: true,
    component: toggleSlider({
      show: true,
      animated: true,
      updateDuration: 1.0
    })
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
  },
  {
    name: "Theme (colors) -- dark tone class",
    class: "pe-dark-tone",
    component: toggle([{
      class: "tests-spinner-themed-spinner"
    }])
  },
  
];
