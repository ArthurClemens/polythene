import stream from "mithril/stream";
import { renderer as h, Dialog, RaisedButton } from "polythene-mithril";

const shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

const longText = [1,2,3].map(() => shortText).join("");

const Updating = {
  oninit: vnode => {
    const dialogVisible = stream(false);
    const count = stream(0);
    // Show updates by means of a simple counter.
    // This could also be a different component state or global/Redux state.
    const intervalId = stream(null);
    Object.assign(vnode.state, {
      dialogVisible,
      intervalId,
      count,
    });    
  },
  view: ({ state }) => {
    const dialogVisible = state.dialogVisible();
    if (dialogVisible) {
      const dialogProps = {
        title: state.count().toString(),
        body: h.trust(longText),
        didShow: () => {
          state.intervalId(
            setInterval(() => (
              state.count(state.count() + 1),
              h.redraw()
            ), 1000)
          );
        },
        didHide: () => {
          // Clean up
          clearInterval(state.intervalId);
          state.intervalId(null);
          state.dialogVisible(false);
          state.count(0);
        }
      };
      Dialog.show(dialogProps);
    }
    return h("div", null, [
      h("span",
        {
          style: {
            paddingRight: "10px"
          }
        },
        state.intervalId() !== null
          ? state.count()
          : 0
      ),
      h(RaisedButton, {
        label: "Show Dialog",
        events: {
          onclick: () => state.dialogVisible(!dialogVisible)
        }
      })
    ]);
  }
};

export default Updating;
