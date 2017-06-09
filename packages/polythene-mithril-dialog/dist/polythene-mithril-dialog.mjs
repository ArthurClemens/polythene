import { renderer, stateComponent } from 'polythene-mithril-base';
import { multipleHOC } from 'polythene-core';
import { classes, coreDialogInstance, transitions } from 'polythene-core-dialog';
import { Shadow } from 'polythene-mithril-shadow';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DialogInstance = stateComponent(_extends({}, coreDialogInstance, {
  createProps: function createProps(vnode, args) {
    return coreDialogInstance.createProps(vnode, _extends(args, { Shadow: Shadow }));
  },
  createContent: function createContent(vnode, args) {
    return coreDialogInstance.createContent(vnode, _extends(args, { Shadow: Shadow }));
  }
}));

DialogInstance.displayName = "DialogInstance";

var options = {
  bodyShowClass: classes.open,
  defaultId: "default_dialog",
  element: "div." + classes.holder,
  instance: DialogInstance,
  placeholder: "span." + classes.placeholder,
  transitions: transitions
};

var multiple = multipleHOC({ options: options, renderer: renderer });
var Dialog = stateComponent(multiple);
Object.getOwnPropertyNames(multiple).forEach(function (p) {
  return Dialog[p] = multiple[p];
});

Dialog.theme = coreDialogInstance.theme;
Dialog.displayName = "Dialog";

export { DialogInstance, Dialog };
