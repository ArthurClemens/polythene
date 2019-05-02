
import { _CardActions } from "polythene-core-card";
import { cast, h, a } from "cyano-react";

export const CardActions = cast(_CardActions, { h, a });
CardActions["displayName"] = "CardActions";
