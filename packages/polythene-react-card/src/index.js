
import { _Card } from "polythene-core-card";
import { CardActions } from "./CardActions";
import { CardMedia } from "./CardMedia";
import { CardPrimary } from "./CardPrimary";
import { Icon } from "polythene-react-icon";
import { ListTile } from "polythene-react-list-tile";
import { Shadow } from "polythene-react-shadow";
import { cast, h, a } from "cyano-react";

export const Card = cast(_Card, { h, a, CardActions, CardMedia, CardPrimary, Icon, ListTile, Shadow });
Card["displayName"] = "Card";
