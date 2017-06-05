import m from 'mithril';
import { Button, IconButton, Search, Shadow } from 'polythene';

import iconSearch from 'mmsvg/google/msvg/action/search';
import iconBack from 'mmsvg/google/msvg/navigation/arrow-back';
import iconClear from 'mmsvg/google/msvg/content/clear';
import iconMic from 'mmsvg/google/msvg/av/mic';

const SearchButton = {
  view: () => 
    m(IconButton, {
      icon: { msvg: iconSearch },
      inactive: true
    })
};

const BackButton = {
  view: (ctrl, opts) =>
    m(IconButton, {
      icon: { msvg: iconBack },
      ink: false,
      events: { onclick: opts.leave }
    })
};

const ClearButton = {
  view: (ctrl, opts) =>
    m(IconButton, {
      icon: { msvg: iconClear },
      ink: false,
      events: { onclick: opts.clear }
    })
};

const MicButton = {
  view: () =>
    m(IconButton, {
      icon: { msvg: iconMic },
      inactive: true
    })
};

export default {
  controller: () => {
    const value = m.prop('');
    const fieldState = m.prop({});
    const clear = () => {
      value('');
      setTimeout(() => fieldState().el.focus(), 0);
      m.redraw();
    };
    const leave = () => {
      value('');
      m.redraw();
    };
    return {
      fieldState,
      value,
      clear,
      leave
    }
  },
  view: (ctrl, opts) =>
    m(Search, Object.assign(
      {},
      {
        textfield: {
          label: 'Search',
          key: 'input',
          value: () => ctrl.value(),
          getState: fieldState => (ctrl.fieldState(fieldState), ctrl.value(fieldState.value))
        },
        buttons: {
          none: {
            before: m(SearchButton, { key: 'search' }),
            after: m(MicButton, { key: 'mic' })
          },
          focus: {
            before: m(SearchButton, { key: 'search' }),
            after: m(MicButton, { key: 'mic' })
          },
          focus_dirty: {
            before: m(BackButton, { key: 'back', leave: ctrl.leave }),
            after: m(ClearButton, { key: 'clear', clear: ctrl.clear })
          },
          dirty: {
            before: m(BackButton, { key: 'back', leave: ctrl.leave }),
            after: m(ClearButton, { key: 'clear', clear: ctrl.clear })
          }
        },
        before: m(Shadow)
      },
      opts
    ))
};
