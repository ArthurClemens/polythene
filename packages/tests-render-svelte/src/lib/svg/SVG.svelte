<script>
  /*
  Workaround for issue https://github.com/sveltejs/svelte/issues/2937
  Generate a unique instance uid instead of doing
  bind:this={domElement}
  */
  import uuidv4 from "uuid/v4";
  import { onMount } from "svelte";
   
  import classes from "polythene-css-classes/svg";

  // DOM bindings
  let domElement;
  const uid = uuidv4();

  // Common vars
  export let className = "";
  export let events = {};
  export let id = undefined;
  export let style = undefined;
  export let testId = undefined;
  export let tone = undefined;

  $: R_classNames = [
    classes.component,
    tone === "dark" ? "pe-dark-tone" : undefined,
    tone === "light" ? "pe-light-tone" : undefined,
    className,
  ].join(" ");

  onMount(() => {
    domElement = document.querySelector(`[data-uid="${uid}"]`);
    const svgElement = domElement.querySelector("svg");
    if (svgElement) {
      svgElement.setAttribute("focusable", "false");
    }
  });
  
</script>

<div
  {...{ "data-uid": uid }}
  class={R_classNames}
  {...(style && {style})}
  {...(id && { 'id': id })}
  {...{ 'data-test-id': testId }}
  {...events}
>
  <slot name="before" />
  <slot />
  <slot name="after" />
</div>
