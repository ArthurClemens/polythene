<script>
  import classes from "polythene-css-classes/shadow";
  import { getShadowDepthClass } from "./getShadowDepthClass";

  // Common vars
  export let className = "";
  export let content = undefined;
  export let style = undefined;
  export let testId = undefined;

  // Component specific vars
  export let shadowDepth = 1;
  export let animated = false;

  $: R_classNames = [
    classes.component,
    animated ? classes.animated : undefined,
    className,
    getShadowDepthClass(shadowDepth)
  ].join(" ");

</script>

<div class={R_classNames} {style} {...{ 'data-test-id': testId }}>
  <slot name="before" />
  {#if content}
    {content}
  {:else}
    <slot />
    <!-- child content -->
  {/if}
  <slot name="after" />
  <div class={classes.bottomShadow} />
  <div class={classes.topShadow} />
</div>
