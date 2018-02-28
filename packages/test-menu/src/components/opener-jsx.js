import React from "react"; // eslint-disable-line no-unused-vars
import stream from "mithril/stream";

export default ({ renderer: h, keys: k, Menu, RaisedButton, List, ListTile, menuFn, transitionOptions, id }) => ({
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
      style={{ position: "relative" }}
    > 
      <RaisedButton
        label="Open menu"
        id={id}
        events={{ [k.onclick]: () => state.show(true) }}
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