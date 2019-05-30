import { Component } from "react";
import { Options, show, hide } from "polythene-core-notification";

interface Notification extends Options{}
declare namespace Notification {}

declare class Notification extends Component<Options> {
  static show: show;
  static hide: hide;
}

export { Notification };
export as namespace Notification;
