import { StateComponent } from 'polythene-react-base';
import { coreSearch } from 'polythene-core-search';
import { TextField } from 'polythene-react-textfield';

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

var Search = StateComponent(_extends({}, coreSearch, {
  createContent: function createContent(vnode, args) {
    return coreSearch.createContent(vnode, _extends(args, {
      TextField: TextField
    }));
  }
}));
Search.displayName = "Search";

export { Search };
