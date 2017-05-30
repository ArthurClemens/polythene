import { viewComponent } from 'polythene-mithril-base';
import { coreFAB } from 'polythene-core-fab';
import { Icon } from 'polythene-mithril-icon';
import { RaisedButton } from 'polythene-mithril-raised-button';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FAB = viewComponent(_extends({}, coreFAB, {
  createProps: function createProps(vnode, args) {
    return coreFAB.createProps(vnode, _extends(args, { Icon: Icon }));
  },
  createContent: function createContent(vnode, args) {
    return coreFAB.createContent(vnode, _extends(args, { Icon: Icon }));
  },
  component: RaisedButton
}));

FAB.theme = coreFAB.theme;
FAB.displayName = "FAB";

export { FAB };
