<script>
  /*
  Workaround for issue https://github.com/sveltejs/svelte/issues/2937
  Generate a unique instance uid instead of doing
  bind:this={domElement}
  */
  import uuidv4 from "uuid/v4";
 	import { onMount } from "svelte";

  import { Icon} from "../icon";
  import { Shadow, getShadowDepthClass } from "../shadow";
  import { writable } from "svelte/store";
  import classes from "polythene-css-classes/button";
  import IconDropdownDown from "./IconDropdownDown.svelte";
  import shadowClasses from "polythene-css-classes/shadow";
  import TextLabel from "./TextLabel.svelte";

  // Store
  const isInactive = writable(false);

  // DOM bindings
  const uid = uuidv4();
  let domElement;

  // Common vars
  export let className = "";
  export let events = {};
  export let id = undefined;
  export let style = undefined;
  export let testId = undefined;
  export let tone = undefined;

  // Component specific vars
  export let animateOnTap = undefined;
  export let border = false;
  export let borders = false;
  export let contained = false;
  export let disabled = false;
  export let dropdown = undefined;
  export let extraWide = false;
  export let highLabel = false;
  export let inactivate = false;
  export let inactive = false;
  export let ink = false;
  export let label = undefined;
  export let parentClassName = "";
  export let raised = false;
  export let selected = false;
  export let separatorAtStart = false;
  export let shadowDepth = undefined;
  export let tabindex = 0;
  export let textStyle = undefined;
  export let url = { href: "javascript:false" };
  export let wash = undefined;

  $: R_inactive = inactive || $isInactive;

  const onClickHandler = events.onclick || (() => {});
  const onKeyUpHandler = events.onkeyup || onClickHandler;

  const handleInactivate = () => {
    if (!inactivate) {
      return;
    }
    isInactive.set(true);
    setTimeout(() => (
      isInactive.set(false)
    ), inactivate * 1000);
  };

  const onClick = e => {
    document.activeElement === domElement && document.activeElement.blur();
    handleInactivate(e);
    onClickHandler(e);
    events && events.onclick && events.onclick(e)
  };

  const handleMouseLeave = e => {
    domElement.blur();
    domElement.removeEventListener("mouseleave", handleMouseLeave);
  };

  const onMouseDown = e => {
    domElement &&
      domElement.addEventListener &&
      domElement.addEventListener("mouseleave", handleMouseLeave);
    events && events.onmousedown && events.onmousedown(e)
  };

  const onKeyUp = e => {
    if (e.keyCode === 13 && document.activeElement === domElement) {
      document.activeElement.blur();
      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }
    events && events.onkeyup && events.onkeyup(e)
  };

  const doesAnimateOnTap = animateOnTap !== false ? true : false;
  const hasHover = !disabled && !selected && (raised ? wash : wash !== false);
  const _shadowDepth = raised
    ? shadowDepth !== undefined
      ? parseInt(shadowDepth, 10)
      : 1
    : 0;
  const _noInk = ink !== undefined && ink === false;
  const _tabindex = disabled || inactive ? -1 : tabindex || 0;

  $: R_classNames = [
    classes.super,
    parentClassName || classes.component,
    contained ? classes.contained : undefined,
    // Raised button classes
    raised ? classes.contained : undefined,
    raised ? classes.raised : undefined,
    raised && doesAnimateOnTap ? shadowClasses.with_active_shadow : undefined,
    raised && doesAnimateOnTap
      ? getShadowDepthClass(_shadowDepth + 1)
      : undefined,
    //
    hasHover ? classes.hasHover : undefined,
    selected ? classes.selected : undefined,
    highLabel ? classes.highLabel : undefined,
    extraWide ? classes.extraWide : undefined,
    disabled ? classes.disabled : undefined,
    R_inactive ? classes.inactive : undefined,
    separatorAtStart ? classes.separatorAtStart : undefined,
    border || borders ? classes.border : undefined,
    dropdown ? classes.hasDropdown : undefined,
    !!dropdown
      ? dropdown.open
        ? classes.dropdownOpen
        : classes.dropdownClosed
      : undefined,
    tone === "dark" ? "pe-dark-tone" : undefined,
    tone === "light" ? "pe-light-tone" : undefined,
    className
  ].join(" ");

  onMount(() => {
    domElement = document.querySelector(`[data-uid="${uid}"]`);
  });
</script>

<a
  {...{ "data-uid": uid }}
  class={R_classNames}
  {...(style && {style})}
  {...(id && { "id": id })}
  {...{ "data-test-id": testId }}
  {...events}
  href={null}
  {...url}
  tabindex={_tabindex}
  on:mousedown={onMouseDown}
  on:keyup={onKeyUp}
  on:click={onClick}>
  <slot name="before" />
  <div class="pe-button__content">
    <Shadow shadowDepth={_shadowDepth} animated />
    {#if disabled || _noInk}
      <div class="pe-ripple" />
    {/if}
    <div class="pe-button__wash">
      <div class="pe-button__wash-color" />
    </div>

    <slot name="label" />

    {#if label !== undefined}
      <TextLabel {label} {textStyle} />
    {:else}
      <slot />
    {/if}

    {#if dropdown}
      <Icon className={classes.dropdown}><IconDropdownDown /></Icon>
    {/if}
  </div>
  <slot name="after" />
</a>
