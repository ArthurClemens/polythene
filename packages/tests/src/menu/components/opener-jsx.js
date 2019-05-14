import React from "react"; // eslint-disable-line no-unused-vars
import stream from "mithril/stream";

export default ({ h, a, Menu, Button, List, ListTile, menuFn, transitionOptions, id, dropdown }) => ({
  oninit: vnode => {
    const show = stream(false);
    Object.assign(vnode.state, {
      show,
      redrawOnUpdate: stream.merge([show]) // for React
    });
  },
  view: vnode => {
    const state = vnode.state;
    const show = state.show();
    return <div
      style={{
        position: "relative",
        height: "inherit"
      }}
    > 
      <Button
        raised
        label="Open menu"
        id={id}
        events={{ [a.onclick]: () => state.show(true) }}
        dropdown={dropdown
          ? {
            open: show
          }
          : null
        }
      />
      {menuFn({
        show,
        target: `#${id}`,
        h,
        Menu,
        List,
        ListTile,
        transitionOptions,
        didHide: () => state.show(false)
      })}
    </div>;
  }
});