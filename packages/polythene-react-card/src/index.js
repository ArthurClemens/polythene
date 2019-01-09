// @ts-check

import { ComponentCreator } from "polythene-react-base";
import { coreCard as core } from "polythene-core-card";
import { CardActions } from "./card-actions";
import { CardMedia } from "./card-media";
import { CardPrimary } from "./card-primary";
import { Icon } from "polythene-react-icon";
import { ListTile } from "polythene-react-list-tile";
import { Shadow } from "polythene-react-shadow";

export const Card = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, CardActions, CardMedia, CardPrimary, Icon, ListTile, Shadow })
});

Card["displayName"] = "Card";
