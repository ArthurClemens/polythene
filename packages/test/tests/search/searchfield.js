import m from "mithril";
import search from "polythene-search";
import iconButton from "polythene-icon-button";
import shadow from "polythene-shadow";

import iconSearch from "mmsvg/google/msvg/action/search";
import iconBack from "mmsvg/google/msvg/navigation/arrow-back";
import iconClear from "mmsvg/google/msvg/content/clear";
import iconMic from "mmsvg/google/msvg/av/mic";

const searchButton = {
  view: () => 
    m(iconButton, {
      icon: { msvg: iconSearch },
      inactive: true
    })
};

const backButton = {
  view: ({attrs}) =>
    m(iconButton, {
      icon: { msvg: iconBack },
      ink: false,
      events: { onclick: attrs.leave }
    })
};

const clearButton = {
  view: ({attrs}) =>
    m(iconButton, {
      icon: { msvg: iconClear },
      ink: false,
      events: { onclick: attrs.clear }
    })
};

const micButton = {
  view: () =>
    m(iconButton, {
      icon: { msvg: iconMic },
      inactive: true
    })
};

export default {
  oninit: ({state}) => {
    state.fieldState = {};
    state.clear = () => {
      state.fieldState.value = "";
      state.fieldState.el.focus();
      m.redraw();
    };
    state.leave = () => {
      state.fieldState.value = "";
      m.redraw();
    };
  },
  view: ({state, attrs}) =>
    m(search, Object.assign(
      {},
      {
        textfield: {
          label: "Search",
          value: () => state.fieldState ? state.fieldState.value : "",
          getState: fieldState => state.fieldState = fieldState
        },
        buttons: {
          none: {
            before: m(searchButton),
            after: m(micButton)
          },
          focus: {
            before: m(searchButton),
            after: m(micButton)
          },
          focus_dirty: {
            before: m(backButton, {leave: state.leave}),
            after: m(clearButton, {clear: state.clear})
          },
          dirty: {
            before: m(backButton, {leave: state.leave}),
            after: m(clearButton, {clear: state.clear})
          }
        },
        before: m(shadow)
      },
      attrs
    ))
};
