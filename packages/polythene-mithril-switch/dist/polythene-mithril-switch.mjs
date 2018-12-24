import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { viewControl, coreSwitch } from 'polythene-core-switch';
import { coreSelectionControl } from 'polythene-core-selection-control';
import { Shadow } from 'polythene-mithril-shadow';
import { IconButton } from 'polythene-mithril-icon-button';

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

var ViewControl = ViewComponent(_extends({}, viewControl, {
  createContent: function createContent(vnode, args) {
    return viewControl.createContent(vnode, _extends(args, {
      Shadow: Shadow,
      IconButton: IconButton
    }));
  }
}));
ViewControl.displayName = "ViewControl";

var SelectionControl = StateComponent(_extends({}, coreSelectionControl, {
  createContent: function createContent(vnode, args) {
    return coreSelectionControl.createContent(vnode, _extends(args, {
      ViewControl: ViewControl
    }));
  }
}));
SelectionControl.displayName = "SelectionControl";

var Switch = StateComponent(_extends({}, coreSwitch, {
  component: SelectionControl
}));
Switch.displayName = "Switch";

export { Switch };
