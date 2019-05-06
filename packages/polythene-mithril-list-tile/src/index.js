import { _ListTile } from "polythene-core-list-tile";
import { Icon } from "polythene-mithril-icon";
import { Ripple } from "polythene-mithril-ripple";
import { cast, h, a } from "cyano-mithril";

export const ListTile = cast(_ListTile, { h, a, Icon, Ripple });
ListTile["displayName"] = "ListTile";
