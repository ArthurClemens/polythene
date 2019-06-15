<script>
  import { classForSize } from "polythene-core";
  import { SVG } from "../svg";
  import classes from "polythene-css-classes/icon";

  // Common vars
  export let className = "";
  export let events = {};
  export let id = undefined;
  export let style = undefined;
  export let testId = undefined;
  export let tone = undefined;

  // Component specific vars
  export let alt = "";
  export let avatar = false;
  export let size = undefined;
  export let src = undefined;
  export let svg = {};

  $: R_classNames = [
    classes.component,
    classForSize(classes, size),
    avatar ? classes.avatar : null,
    tone === "dark" ? "pe-dark-tone" : undefined,
    tone === "light" ? "pe-light-tone" : undefined,
    className
  ].join(" ");
</script>

<div
  class={R_classNames}
  {...(style && {style})}
  {...(id && { 'id': id })}
  {...{ 'data-test-id': testId }}
  {...events}
>
  <slot name="before" />
  {#if src !== undefined}
    <img src={src} alt={alt} />
  {:else}
    <SVG {...svg}><slot /></SVG>
  {/if}
  <slot name="after" />
</div>
