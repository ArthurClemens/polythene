import { StateComponent, ViewComponent } from 'polythene-mithril-base';
import { coreCard, coreCardActions, coreCardMedia, coreCardPrimary } from 'polythene-core-card';
import { Icon } from 'polythene-mithril-icon';
import { ListTile } from 'polythene-mithril-list-tile';
import { Shadow } from 'polythene-mithril-shadow';

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardActions = ViewComponent(_extends$1({}, coreCardActions));

CardActions.displayName = "CardActions";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardMedia = StateComponent(_extends$2({}, coreCardMedia));

CardMedia.displayName = "CardMedia";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardPrimary = ViewComponent(_extends$3({}, coreCardPrimary));

CardPrimary.displayName = "CardPrimary";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Card = ViewComponent(_extends({}, coreCard, {
  createContent: function createContent(vnode, args) {
    return coreCard.createContent(vnode, _extends(args, { CardActions: CardActions, CardMedia: CardMedia, CardPrimary: CardPrimary, Icon: Icon, ListTile: ListTile, Shadow: Shadow }));
  }
}));

Card.theme = coreCard.theme;
Card.displayName = "Card";

export { Card };
