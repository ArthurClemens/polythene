
import { _CardMedia } from "polythene-core-card";
import { cast, h, a, useState, useEffect, getRef } from "cyano-mithril";

export const CardMedia = cast(_CardMedia, { h, a, useState, useEffect, getRef });
CardMedia["displayName"] = "CardMedia";
