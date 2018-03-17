(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-card'), require('polythene-react-icon'), require('polythene-react-list-tile'), require('polythene-react-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-card', 'polythene-react-icon', 'polythene-react-list-tile', 'polythene-react-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-card'],global['polythene-react-icon'],global['polythene-react-list-tile'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreCard,polytheneReactIcon,polytheneReactListTile,polytheneReactShadow) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var CardActions = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreCard.coreCardActions));

  CardActions.displayName = "CardActions";

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var CardMedia = polytheneReactBase.StateComponent(_extends$1({}, polytheneCoreCard.coreCardMedia));

  CardMedia.displayName = "CardMedia";

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var CardPrimary = polytheneReactBase.ViewComponent(_extends$2({}, polytheneCoreCard.coreCardPrimary));

  CardPrimary.displayName = "CardPrimary";

  var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Card = polytheneReactBase.ViewComponent(_extends$3({}, polytheneCoreCard.coreCard, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreCard.coreCard.createContent(vnode, _extends$3(args, { CardActions: CardActions, CardMedia: CardMedia, CardPrimary: CardPrimary, Icon: polytheneReactIcon.Icon, ListTile: polytheneReactListTile.ListTile, Shadow: polytheneReactShadow.Shadow }));
    }
  }));

  Card.displayName = "Card";

  exports.Card = Card;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-card.js.map
