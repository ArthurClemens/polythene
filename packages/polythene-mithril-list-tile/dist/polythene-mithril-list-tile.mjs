import { ViewComponent } from 'polythene-mithril-base';
import { coreListTile } from 'polythene-core-list-tile';
import { Icon } from 'polythene-mithril-icon';
import { Ripple } from 'polythene-mithril-ripple';

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

var ListTile = ViewComponent(_extends({}, coreListTile, {
  createProps: function createProps(vnode, args) {
    return coreListTile.createProps(vnode, _extends(args, {
      Icon: Icon,
      Ripple: Ripple
    }));
  },
  createContent: function createContent(vnode, args) {
    return coreListTile.createContent(vnode, _extends(args, {
      Icon: Icon,
      Ripple: Ripple
    }));
  }
}));
ListTile.displayName = "ListTile";

export { ListTile };
