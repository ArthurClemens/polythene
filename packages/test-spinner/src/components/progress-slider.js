import stream from "mithril/stream";

const STEP_DURATION = 2000;

export default ({ renderer: h, keys: k, Spinner, RaisedButton, Slider, animated, updateDuration, showActivateButton }) => ({
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
    vnode.state = {
      start,
      step,
      percentage,
      redrawOnUpdate: stream.merge([start, percentage]) // update React
    };
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
          max: 1,
          step: 0,
          value: percentage,
          onChange: ({ value }) => state.percentage(value),
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
      showActivateButton && h(RaisedButton, {
        label: "Run",
        events: {
          [k.onclick]: () => (state.start(null), window.requestAnimationFrame(state.step))
        }
      })
    ]);
  }
});
