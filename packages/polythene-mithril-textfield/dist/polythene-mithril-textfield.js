(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-textfield'), require('cyano-mithril')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-textfield', 'cyano-mithril'], factory) :
	(global = global || self, factory(global.polythene = {}, global['polythene-core-textfield'], global['cyano-mithril']));
}(this, function (exports, polytheneCoreTextfield, cyanoMithril) { 'use strict';

	var TextField = cyanoMithril.cast(polytheneCoreTextfield._TextField, {
	  h: cyanoMithril.h,
	  a: cyanoMithril.a,
	  useEffect: cyanoMithril.useEffect,
	  useState: cyanoMithril.useState,
	  useRef: cyanoMithril.useRef,
	  getRef: cyanoMithril.getRef
	});
	TextField["displayName"] = "TextField";

	exports.TextField = TextField;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=polythene-mithril-textfield.js.map
