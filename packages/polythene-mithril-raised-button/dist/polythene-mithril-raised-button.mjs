import { Button } from 'polythene-mithril-button';
import { deprecation } from 'polythene-core';
import { ViewComponent, renderer } from 'polythene-mithril-base';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var RaisedButton = ViewComponent({
  onMount: function onMount() {
    deprecation("RaisedButton", {
      newComponent: "Button",
      newOption: "raised: true"
    });
  },
  view: function view(vnode) {
    return renderer(Button, _extends({}, {
      raised: true
    }, vnode.attrs), vnode.children);
  }
});
RaisedButton.displayName = "RaisedButton";

export { RaisedButton };
