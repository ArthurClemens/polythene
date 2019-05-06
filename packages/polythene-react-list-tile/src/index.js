import { _ListTile } from "polythene-core-list-tile";
import { Icon } from "polythene-react-icon";
import { Ripple } from "polythene-react-ripple";
import { cast, h, a } from "cyano-react";

export const ListTile = cast(_ListTile, { h, a, Icon, Ripple });
ListTile["displayName"] = "ListTile";
