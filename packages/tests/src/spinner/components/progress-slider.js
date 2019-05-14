import stream from "mithril/stream";

const STEP_DURATION = 2000;
const MAX_VALUE = 1000;

export default ({ h, a, Spinner, Button, Slider, animated, updateDuration, showActivateButton }) => ({
  oninit: vnode => {
    const start = stream(null);
    const percentage = stream(0);
    const step = timestamp => {
      if (!start()) start(timestamp);
      const progress = timestamp - start();
      percentage(Math.min(1, 1.0 / STEP_DURATION * progress));
      if (h.redraw) h.redraw(); // update Mithril
      if (progress < STEP_DURATION) {
        window.requestAnimationFrame(step);
      }
    };
    Object.assign(vnode.state, {
      start,
      step,
      percentage,
      redrawOnUpdate: stream.merge([start, percentage]) // update React
    });
  },
  view: ({ state }) => {
    const percentage = state.percentage();
    return h("div", [
      h("div",
        {
          style: {
            display: "flex",
            width: "100%",
            margin: "0 0 20px 0"
          }
        },
        h(Slider, {
          min: 0,
          max: MAX_VALUE,
          step: 0,
          value: percentage * MAX_VALUE,
          onChange: ({ value }) => (
            // called when clicking on the Slider
            state.percentage(value / MAX_VALUE)
          ),
          style: {
            display: "flex",
            alignItems: "center"
          },
          after: h(Spinner, Object.assign(
            {},
            {
              show: true,
              percentage,
              updateDuration,
              class: "self-center",
              animated
            }
          ))
        })
      ),
      showActivateButton && h(Button, {
        raised: true,
        label: "Run",
        events: {
          [a.onclick]: () => (
            state.start(null),
            window.requestAnimationFrame(state.step)
          )
        }
      })
    ]);
  }
});
