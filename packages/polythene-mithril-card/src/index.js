import { ViewComponent } from "polythene-mithril-base";
import { coreCard as core } from "polythene-core-card";
import { CardActions } from "./card-actions";
import { CardMedia } from "./card-media";
import { CardPrimary } from "./card-primary";
import { Icon } from "polythene-mithril-icon";
import { ListTile } from "polythene-mithril-list-tile";
import { Shadow } from "polythene-mithril-shadow";

export const Card = ViewComponent(Object.assign(
  {},
  core,
  {
    createContent: (vnode, args) => core.createContent(vnode, Object.assign(args, { CardActions, CardMedia, CardPrimary, Icon, ListTile, Shadow }))
  }
));

Card.theme = core.theme;
Card.displayName = "Card";
