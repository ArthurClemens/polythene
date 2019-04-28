import { _IconButton } from "polythene-core-icon-button";
import { Icon } from "polythene-mithril-icon";
import { Button } from "polythene-mithril-button";
import { cast, h, a } from "cyano-mithril";

export const IconButton = cast(_IconButton, { h, a, Icon, Button });
