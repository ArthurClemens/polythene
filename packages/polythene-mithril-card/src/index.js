
import { _Card } from "polythene-core-card";
import { CardActions } from "./CardActions";
import { CardMedia } from "./CardMedia";
import { CardPrimary } from "./CardPrimary";
import { Icon } from "polythene-mithril-icon";
import { ListTile } from "polythene-mithril-list-tile";
import { Shadow } from "polythene-mithril-shadow";
import { cast, h, a } from "cyano-mithril";

export const Card = cast(_Card, { h, a, CardActions, CardMedia, CardPrimary, Icon, ListTile, Shadow });
Card["displayName"] = "Card";
