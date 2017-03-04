import m from "mithril";
import search from "polythene-search";
import iconButton from "polythene-icon-button";
import shadow from "polythene-shadow";

import iconSearch from "mmsvg/google/msvg/action/search";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";
import iconClear from "mmsvg/google/msvg/content/clear";
import iconMic from "mmsvg/google/msvg/av/mic";

const searchButton = m(iconButton, {
  icon: { msvg: iconSearch },
  inactive: true
});

const backButton = vnode => (
  m(iconButton, {
    icon: { msvg: iconBack },
    ink: false,
    events: {
      onclick: () => (
        vnode.state.fieldState.value = "",
        m.redraw()
      )
    }
  })
);

const clearButton = vnode => (
  m(iconButton, {
    icon: { msvg: iconClear },
    ink: false,
    events: {
      onclick: () => (
        vnode.state.fieldState.value = "",
        vnode.state.fieldState.el.focus(),
        m.redraw()
      )
    }
  })
);

const micButton = m(iconButton, {
  icon: { msvg: iconMic },
  inactive: true
});

const searchfield = {
  fieldState: undefined,
  view: vnode =>
    m(search, Object.assign(
      {},
      {
        textfield: {
          label: "Search",
          value: () => vnode.state.fieldState ? vnode.state.fieldState.value : "",
          getState: fieldState => vnode.state.fieldState = fieldState
        },
        buttons: {
          none: {
            before: searchButton,
            after: micButton
          },
          focus: {
            before: searchButton,
            after: micButton
          },
          focus_dirty: {
            before: backButton(vnode),
            after: clearButton(vnode)
          },
          dirty: {
            before: backButton(vnode),
            after: clearButton(vnode)
          }
        },
        before: m(shadow)
      },
      vnode.attrs
    ))
};

const block = {
  view: vnode => 
    m("form", {
      style: Object.assign(
        {},
        {
          minHeight: "150px",
          overflow: "hidden"
        },
        vnode.attrs.dark ? null : { background: "#e4e4e4" },
        vnode.attrs.fullWidth
          ? null
          : { padding: "8px" }
      )},
      m(searchfield, vnode.attrs)
    )
};

export const tests = [
  {
    name: "Option: textfield, buttons",
    component: {
      view: () => m(block)
    }
  },
  {
    name: "Option: textfield, buttons, fullWidth",
    component: {
      view: () => m(block, {fullWidth: true})
    }
  },
  
];
