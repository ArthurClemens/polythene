import { Component } from "mithril";
import { Options } from "polythene-core-card";

interface Card extends Options{}
declare namespace Card {}
declare const Card: Component<Options, any>;

export { Card };
export as namespace Card;
