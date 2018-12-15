(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-radio-group'), require('polythene-mithril-radio-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-radio-group', 'polythene-mithril-radio-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-radio-group'],global['polythene-mithril-radio-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreRadioGroup,polytheneMithrilRadioButton) { 'use strict';

  const RadioGroup = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreRadioGroup.coreRadioGroup, {
    createContent: (vnode, args) => polytheneCoreRadioGroup.coreRadioGroup.createContent(vnode, Object.assign(args, {
      RadioButton: polytheneMithrilRadioButton.RadioButton
    }))
  }));
  RadioGroup.displayName = "RadioGroup";

  exports.RadioGroup = RadioGroup;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-radio-group.js.map
