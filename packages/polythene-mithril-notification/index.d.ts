import { ClassComponent } from "mithril";
import { Options, show, hide } from "polythene-core-notification";

interface Notification extends Options{}
declare namespace Notification {}

declare interface Notification extends ClassComponent {
  show: show;
  hide: hide;
}

declare const Notification: Notification;

export { Notification };
export as namespace Notification;
