(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-mithril-button'), require('polythene-mithril-card'), require('polythene-mithril-checkbox'), require('polythene-mithril-dialog'), require('polythene-mithril-dialog-pane'), require('polythene-mithril-drawer'), require('polythene-mithril-fab'), require('polythene-mithril-icon'), require('polythene-mithril-icon-button'), require('polythene-mithril-ios-spinner'), require('polythene-mithril-list'), require('polythene-mithril-list-tile'), require('polythene-mithril-material-design-progress-spinner'), require('polythene-mithril-material-design-spinner'), require('polythene-mithril-menu'), require('polythene-mithril-notification'), require('polythene-mithril-radio-button'), require('polythene-mithril-radio-group'), require('polythene-mithril-raised-button'), require('polythene-mithril-ripple'), require('polythene-mithril-search'), require('polythene-mithril-shadow'), require('polythene-mithril-slider'), require('polythene-mithril-snackbar'), require('polythene-mithril-split-button'), require('polythene-mithril-svg'), require('polythene-mithril-switch'), require('polythene-mithril-tabs'), require('polythene-mithril-textfield'), require('polythene-mithril-toolbar')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-mithril-button', 'polythene-mithril-card', 'polythene-mithril-checkbox', 'polythene-mithril-dialog', 'polythene-mithril-dialog-pane', 'polythene-mithril-drawer', 'polythene-mithril-fab', 'polythene-mithril-icon', 'polythene-mithril-icon-button', 'polythene-mithril-ios-spinner', 'polythene-mithril-list', 'polythene-mithril-list-tile', 'polythene-mithril-material-design-progress-spinner', 'polythene-mithril-material-design-spinner', 'polythene-mithril-menu', 'polythene-mithril-notification', 'polythene-mithril-radio-button', 'polythene-mithril-radio-group', 'polythene-mithril-raised-button', 'polythene-mithril-ripple', 'polythene-mithril-search', 'polythene-mithril-shadow', 'polythene-mithril-slider', 'polythene-mithril-snackbar', 'polythene-mithril-split-button', 'polythene-mithril-svg', 'polythene-mithril-switch', 'polythene-mithril-tabs', 'polythene-mithril-textfield', 'polythene-mithril-toolbar'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-mithril-button'],global['polythene-mithril-card'],global['polythene-mithril-checkbox'],global['polythene-mithril-dialog'],global['polythene-mithril-dialog-pane'],global['polythene-mithril-drawer'],global['polythene-mithril-fab'],global['polythene-mithril-icon'],global['polythene-mithril-icon-button'],global['polythene-mithril-ios-spinner'],global['polythene-mithril-list'],global['polythene-mithril-list-tile'],global['polythene-mithril-material-design-progress-spinner'],global['polythene-mithril-material-design-spinner'],global['polythene-mithril-menu'],global['polythene-mithril-notification'],global['polythene-mithril-radio-button'],global['polythene-mithril-radio-group'],global['polythene-mithril-raised-button'],global['polythene-mithril-ripple'],global['polythene-mithril-search'],global['polythene-mithril-shadow'],global['polythene-mithril-slider'],global['polythene-mithril-snackbar'],global['polythene-mithril-split-button'],global['polythene-mithril-svg'],global['polythene-mithril-switch'],global['polythene-mithril-tabs'],global['polythene-mithril-textfield'],global['polythene-mithril-toolbar']));
}(this, (function (exports,polytheneMithrilBase,polytheneMithrilButton,polytheneMithrilCard,polytheneMithrilCheckbox,polytheneMithrilDialog,polytheneMithrilDialogPane,polytheneMithrilDrawer,polytheneMithrilFab,polytheneMithrilIcon,polytheneMithrilIconButton,polytheneMithrilIosSpinner,polytheneMithrilList,polytheneMithrilListTile,polytheneMithrilMaterialDesignProgressSpinner,polytheneMithrilMaterialDesignSpinner,polytheneMithrilMenu,polytheneMithrilNotification,polytheneMithrilRadioButton,polytheneMithrilRadioGroup,polytheneMithrilRaisedButton,polytheneMithrilRipple,polytheneMithrilSearch,polytheneMithrilShadow,polytheneMithrilSlider,polytheneMithrilSnackbar,polytheneMithrilSplitButton,polytheneMithrilSvg,polytheneMithrilSwitch,polytheneMithrilTabs,polytheneMithrilTextfield,polytheneMithrilToolbar) { 'use strict';

	Object.keys(polytheneMithrilBase).forEach(function (key) { exports[key] = polytheneMithrilBase[key]; });
	Object.keys(polytheneMithrilButton).forEach(function (key) { exports[key] = polytheneMithrilButton[key]; });
	Object.keys(polytheneMithrilCard).forEach(function (key) { exports[key] = polytheneMithrilCard[key]; });
	Object.keys(polytheneMithrilCheckbox).forEach(function (key) { exports[key] = polytheneMithrilCheckbox[key]; });
	Object.keys(polytheneMithrilDialog).forEach(function (key) { exports[key] = polytheneMithrilDialog[key]; });
	Object.keys(polytheneMithrilDialogPane).forEach(function (key) { exports[key] = polytheneMithrilDialogPane[key]; });
	Object.keys(polytheneMithrilDrawer).forEach(function (key) { exports[key] = polytheneMithrilDrawer[key]; });
	Object.keys(polytheneMithrilFab).forEach(function (key) { exports[key] = polytheneMithrilFab[key]; });
	Object.keys(polytheneMithrilIcon).forEach(function (key) { exports[key] = polytheneMithrilIcon[key]; });
	Object.keys(polytheneMithrilIconButton).forEach(function (key) { exports[key] = polytheneMithrilIconButton[key]; });
	Object.keys(polytheneMithrilIosSpinner).forEach(function (key) { exports[key] = polytheneMithrilIosSpinner[key]; });
	Object.keys(polytheneMithrilList).forEach(function (key) { exports[key] = polytheneMithrilList[key]; });
	Object.keys(polytheneMithrilListTile).forEach(function (key) { exports[key] = polytheneMithrilListTile[key]; });
	Object.keys(polytheneMithrilMaterialDesignProgressSpinner).forEach(function (key) { exports[key] = polytheneMithrilMaterialDesignProgressSpinner[key]; });
	Object.keys(polytheneMithrilMaterialDesignSpinner).forEach(function (key) { exports[key] = polytheneMithrilMaterialDesignSpinner[key]; });
	Object.keys(polytheneMithrilMenu).forEach(function (key) { exports[key] = polytheneMithrilMenu[key]; });
	Object.keys(polytheneMithrilNotification).forEach(function (key) { exports[key] = polytheneMithrilNotification[key]; });
	Object.keys(polytheneMithrilRadioButton).forEach(function (key) { exports[key] = polytheneMithrilRadioButton[key]; });
	Object.keys(polytheneMithrilRadioGroup).forEach(function (key) { exports[key] = polytheneMithrilRadioGroup[key]; });
	Object.keys(polytheneMithrilRaisedButton).forEach(function (key) { exports[key] = polytheneMithrilRaisedButton[key]; });
	Object.keys(polytheneMithrilRipple).forEach(function (key) { exports[key] = polytheneMithrilRipple[key]; });
	Object.keys(polytheneMithrilSearch).forEach(function (key) { exports[key] = polytheneMithrilSearch[key]; });
	Object.keys(polytheneMithrilShadow).forEach(function (key) { exports[key] = polytheneMithrilShadow[key]; });
	Object.keys(polytheneMithrilSlider).forEach(function (key) { exports[key] = polytheneMithrilSlider[key]; });
	Object.keys(polytheneMithrilSnackbar).forEach(function (key) { exports[key] = polytheneMithrilSnackbar[key]; });
	Object.keys(polytheneMithrilSplitButton).forEach(function (key) { exports[key] = polytheneMithrilSplitButton[key]; });
	Object.keys(polytheneMithrilSvg).forEach(function (key) { exports[key] = polytheneMithrilSvg[key]; });
	Object.keys(polytheneMithrilSwitch).forEach(function (key) { exports[key] = polytheneMithrilSwitch[key]; });
	Object.keys(polytheneMithrilTabs).forEach(function (key) { exports[key] = polytheneMithrilTabs[key]; });
	Object.keys(polytheneMithrilTextfield).forEach(function (key) { exports[key] = polytheneMithrilTextfield[key]; });
	Object.keys(polytheneMithrilToolbar).forEach(function (key) { exports[key] = polytheneMithrilToolbar[key]; });

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril.js.map
