<script context="module">
  import { getShadowDepthClass as getDepthClass } from "./getShadowDepthClass";
  export const getShadowDepthClass = getDepthClass; // workaround
</script>

<script>
  import classes from "polythene-css-classes/shadow";

  // Common vars
  export let className = "";
  export let events = {};
  export let id = undefined;
  export let style = undefined;
  export let testId = undefined;

  // Component specific vars
  export let shadowDepth = 1;
  export let animated = false;

  $: R_classNames = [
    classes.component,
    animated ? classes.animated : undefined,
    className,
    getDepthClass(shadowDepth)
  ].join(" ");

</script>

<div
  class={R_classNames}
  id={id}
  {style}
  {...{ 'data-test-id': testId }}
  {...events}
>
  <slot name="before" />
  <slot />
  <slot name="after" />
  <div class={classes.bottomShadow} />
  <div class={classes.topShadow} />
</div>
