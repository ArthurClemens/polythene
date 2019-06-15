<script>
  import { rippleAnimation } from "polythene-core-ripple";
  import { pointerEndEvent } from "polythene-core";
  import { writable } from "svelte/store";
  import classes from "polythene-css-classes/ripple";

  /*
  Workaround for issue https://github.com/sveltejs/svelte/issues/2937
  Generate a unique instance uid instead of doing
  bind:this={domElement}
  */
  import uuidv4 from "uuid/v4";
  import { onMount } from "svelte";
   
  // Store
  const animationCount = writable(0);

  // DOM bindings
  let domElement;
  const uid = uuidv4();

  // Common vars
  export let className = "";
  export let id = undefined;
  export let style = undefined;
  export let testId = undefined;
  export let tone = undefined;

  // Component specific vars
  export let disabled = false;
  export let unconstrained = false;
  export let multi = false;
  export let target = undefined;
  export let start = undefined; // callback at animation start
  export let end = undefined; // callback at animation end
  
  // Ripple animation vars
  export let duration = undefined;
  export let center = false;
  export let startOpacity = undefined;
  export let endOpacity = undefined;
  export let opacityDecayVelocity = undefined;
  export let startScale = undefined;
  export let endScale = undefined;
  export let animationTimingFunction = undefined;
  export let persistent = false;

  $: R_classNames = [
    classes.component,
    unconstrained ? classes.unconstrained : null,
    tone === "dark" ? "pe-dark-tone" : undefined,
    tone === "light" ? "pe-light-tone" : undefined,
    className,
  ].join(" ");

  const tap = e => {
    if (disabled || !domElement || (!multi && $animationCount > 0)) {
      return;
    }
    if (start) {
      start(e);
    }
    const id = `ripple_animation_${new Date().getTime()}`;
    const props = {
      duration,
      center,
      startOpacity,
      endOpacity,
      opacityDecayVelocity,
      startScale,
      endScale,
      animationTimingFunction,
      persistent,
    };
    const animation = rippleAnimation({ e, id, el: domElement, props, classes })
      .then(evt => {
        if (end) {
          end(evt);
        }
        animationCount.set($animationCount - 1);
      });
    animationCount.set($animationCount + 1);
  };

  onMount(() => {
    domElement = document.querySelector(`[data-uid="${uid}"]`);
    const triggerEl = target || (domElement ? domElement.parentElement : undefined);

    if (triggerEl && triggerEl.addEventListener) {
      pointerEndEvent.forEach(evt =>
        triggerEl.addEventListener(evt, tap, false));
    
      return () => {
        pointerEndEvent.forEach(evt =>
          triggerEl.removeEventListener(evt, tap, false));
      };
    }
  });
  
</script>

<div
  {...{ "data-uid": uid }}
  class={R_classNames}
  {...(style && {style})}
  {...(id && { 'id': id })}
  {...{ 'data-test-id': testId }}
>
  <slot name="before" />
  <slot />
  <slot name="after" />
</div>
