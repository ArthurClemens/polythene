import { ViewComponent, StateComponent } from 'polythene-mithril-base';
import { coreCardActions, coreCardMedia, coreCardPrimary, coreCard } from 'polythene-core-card';
import { Icon } from 'polythene-mithril-icon';
import { ListTile } from 'polythene-mithril-list-tile';
import { Shadow } from 'polythene-mithril-shadow';

const CardActions = ViewComponent(Object.assign({}, coreCardActions));
CardActions.displayName = "CardActions";

const CardMedia = StateComponent(Object.assign({}, coreCardMedia));
CardMedia.displayName = "CardMedia";

const CardPrimary = ViewComponent(Object.assign({}, coreCardPrimary));
CardPrimary.displayName = "CardPrimary";

const Card = ViewComponent(Object.assign({}, coreCard, {
  createContent: (vnode, args) => coreCard.createContent(vnode, Object.assign(args, {
    CardActions,
    CardMedia,
    CardPrimary,
    Icon,
    ListTile,
    Shadow
  }))
}));
Card.displayName = "Card";

export { Card };
