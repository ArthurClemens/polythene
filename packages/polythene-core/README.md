# Core

Core Polythene functions.

* animation-event
* attrs
* events
* multiple
* pointer
* prop
* transition
* variables

## Multiple

Multiple is a Higher Order Component that renders multiple instances of a component, each one spawned from the same origin. A good example is [Notification](../polythene-notification) that creates one message after the other, each displayed in the center of the screen.

There is usually only one notification visible on the screen (good UX practice). Multiple messages are queued and shown one after the other.

A similar principle can be seen with [Dialog](../polythene-dialog) - there is usually only one dialog visible on the screen (although there are cases for layered dialogs, for example Facebook's photo gallery inside a post dialog).
