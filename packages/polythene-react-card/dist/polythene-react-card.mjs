import { ViewComponent, StateComponent } from 'polythene-react-base';
import { coreCardActions, coreCardMedia, coreCardPrimary, coreCard } from 'polythene-core-card';
import { Icon } from 'polythene-react-icon';
import { ListTile } from 'polythene-react-list-tile';
import { Shadow } from 'polythene-react-shadow';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var CardActions = ViewComponent(_extends({}, coreCardActions));
CardActions.displayName = "CardActions";

var CardMedia = StateComponent(_extends({}, coreCardMedia));
CardMedia.displayName = "CardMedia";

var CardPrimary = ViewComponent(_extends({}, coreCardPrimary));
CardPrimary.displayName = "CardPrimary";

var Card = ViewComponent(_extends({}, coreCard, {
  createContent: function createContent(vnode, args) {
    return coreCard.createContent(vnode, _extends(args, {
      CardActions: CardActions,
      CardMedia: CardMedia,
      CardPrimary: CardPrimary,
      Icon: Icon,
      ListTile: ListTile,
      Shadow: Shadow
    }));
  }
}));
Card.displayName = "Card";

export { Card };
