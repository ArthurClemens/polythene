(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-card'), require('polythene-mithril-icon'), require('polythene-mithril-list-tile'), require('polythene-mithril-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-card', 'polythene-mithril-icon', 'polythene-mithril-list-tile', 'polythene-mithril-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-card'],global['polythene-mithril-icon'],global['polythene-mithril-list-tile'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreCard,polytheneMithrilIcon,polytheneMithrilListTile,polytheneMithrilShadow) { 'use strict';

  const CardActions = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreCard.coreCardActions));
  CardActions.displayName = "CardActions";

  const CardMedia = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreCard.coreCardMedia));
  CardMedia.displayName = "CardMedia";

  const CardPrimary = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreCard.coreCardPrimary));
  CardPrimary.displayName = "CardPrimary";

  const Card = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreCard.coreCard, {
    createContent: (vnode, args) => polytheneCoreCard.coreCard.createContent(vnode, Object.assign(args, {
      CardActions,
      CardMedia,
      CardPrimary,
      Icon: polytheneMithrilIcon.Icon,
      ListTile: polytheneMithrilListTile.ListTile,
      Shadow: polytheneMithrilShadow.Shadow
    }))
  }));
  Card.displayName = "Card";

  exports.Card = Card;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-card.js.map
