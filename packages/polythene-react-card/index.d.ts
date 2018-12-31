import { Component } from "react";
import { Options } from "polythene-core-card";

interface Card extends Options{}
declare namespace Card {}
declare class Card extends Component<Options> {}

export { Card };
export as namespace Card;
