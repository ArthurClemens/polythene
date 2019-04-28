import { _IconButton } from "polythene-core-icon-button";
import { Icon } from "polythene-react-icon";
import { Button } from "polythene-react-button";
import { cast, h, a } from "cyano-react";

export const IconButton = cast(_IconButton, { h, a, Icon, Button });
