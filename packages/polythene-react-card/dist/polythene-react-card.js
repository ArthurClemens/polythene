(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-card'), require('polythene-react-icon'), require('polythene-react-list-tile'), require('polythene-react-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-card', 'polythene-react-icon', 'polythene-react-list-tile', 'polythene-react-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-card'],global['polythene-react-icon'],global['polythene-react-list-tile'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreCard,polytheneReactIcon,polytheneReactListTile,polytheneReactShadow) { 'use strict';

  const CardActions = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreCard.coreCardActions));
  CardActions.displayName = "CardActions";

  const CardMedia = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreCard.coreCardMedia));
  CardMedia.displayName = "CardMedia";

  const CardPrimary = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreCard.coreCardPrimary));
  CardPrimary.displayName = "CardPrimary";

  const Card = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreCard.coreCard, {
    createContent: (vnode, args) => polytheneCoreCard.coreCard.createContent(vnode, Object.assign(args, {
      CardActions,
      CardMedia,
      CardPrimary,
      Icon: polytheneReactIcon.Icon,
      ListTile: polytheneReactListTile.ListTile,
      Shadow: polytheneReactShadow.Shadow
    }))
  }));
  Card.displayName = "Card";

  exports.Card = Card;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-card.js.map
