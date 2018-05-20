import stream from "mithril/stream";

const STEP_DURATION = 2000;

export default ({ renderer: h, keys: k, spinners=[{}], Spinner, RaisedButton, className, permanent=true }) => ({
  oninit: vnode => {
    const show = stream(false);
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
      show,
      step,
      percentage,
      redrawOnUpdate: stream.merge([show, start, percentage]) // update React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const show = state.show();
    const percentage = state.percentage();
    return h("div",
      {
        style: { position: "relative" }
      },
      [
        h(RaisedButton, {
          label: permanent
            ? "Run"
            : "Toggle",
          events: {
            [k.onclick]: () => (
              state.show(!show),
              state.start(null),
              window.requestAnimationFrame(state.step)
            )
          }
        }),
        h("div",
          {
            style: {
              display: "flex",
              width: "100%",
              margin: "20px 0 0 0"
            }
          },
          spinners.map(attrs => 
            h("div",
              {
                style: {
                  marginRight: "20px",
                  width: "100%"
                }
              },
              h(Spinner, Object.assign(
                {},
                {
                  show: permanent
                    ? true
                    : show,
                  percentage,
                  className
                },
                attrs
              ))
            )
          )
        )
      ]
    );
  }
});
