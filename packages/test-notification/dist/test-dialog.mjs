import { Notification, keys, renderer } from 'polythene-mithril';

var genericTests = (function (_ref) {
  var renderer$$1 = _ref.renderer,
      keys$$1 = _ref.keys,
      Notification$$1 = _ref.Notification;


  return [];
});

var mithrilTests = function mithrilTests() {

  return [];
};

var testsMithril = [].concat(genericTests({ Notification: Notification, renderer: renderer, keys: keys })).concat(mithrilTests({ Notification: Notification, renderer: renderer, keys: keys }));

// export { default as reactTests }    from "./tests-react";

export { testsMithril as mithrilTests };
