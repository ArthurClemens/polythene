import { _List } from "polythene-core-list";
import { ListTile } from "polythene-mithril-list-tile";
import { cast, h, a } from "cyano-mithril";

export const List = cast(_List, { h, a, ListTile });
List["displayName"] = "List";
