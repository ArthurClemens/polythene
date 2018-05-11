import stream from "mithril/stream";

const STEP_DURATION = 2000;

export default ({ renderer: h, keys: k, spinners=[{}], Spinner, RaisedButton, className }) => ({
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
  view: vnode => {
    const state = vnode.state;
    const percentage = state.percentage();
    return h("div",
      {
        style: { position: "relative" }
      },
      [
        h(RaisedButton, {
          label: "Run",
          events: {
            [k.onclick]: () => (state.start(null), window.requestAnimationFrame(state.step))
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
                  show: true,
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
