(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-card'), require('polythene-mithril-icon'), require('polythene-mithril-list-tile'), require('polythene-mithril-shadow')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-card', 'polythene-mithril-icon', 'polythene-mithril-list-tile', 'polythene-mithril-shadow'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-card'],global['polythene-mithril-icon'],global['polythene-mithril-list-tile'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreCard,polytheneMithrilIcon,polytheneMithrilListTile,polytheneMithrilShadow) { 'use strict';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardActions = polytheneMithrilBase.ViewComponent(_extends$1({}, polytheneCoreCard.coreCardActions));

CardActions.displayName = "CardActions";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardMedia = polytheneMithrilBase.StateComponent(_extends$2({}, polytheneCoreCard.coreCardMedia));

CardMedia.displayName = "CardMedia";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardPrimary = polytheneMithrilBase.ViewComponent(_extends$3({}, polytheneCoreCard.coreCardPrimary));

CardPrimary.displayName = "CardPrimary";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Card = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreCard.coreCard, {
  createContent: function createContent(vnode, args) {
    return polytheneCoreCard.coreCard.createContent(vnode, _extends(args, { CardActions: CardActions, CardMedia: CardMedia, CardPrimary: CardPrimary, Icon: polytheneMithrilIcon.Icon, ListTile: polytheneMithrilListTile.ListTile, Shadow: polytheneMithrilShadow.Shadow }));
  }
}));

Card.displayName = "Card";

exports.Card = Card;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-card.js.map
