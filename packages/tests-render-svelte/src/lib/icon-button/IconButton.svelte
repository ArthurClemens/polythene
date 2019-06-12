<script>
  import { Button } from "../button";
  import { Icon } from "../icon";
  import classes from "polythene-css-classes/icon-button";

  export let wash = false;
  export let animateOnTap = false;
  export let compact = false;
  export let parentClassName = undefined;
  export let icon = undefined;
  export let label = undefined;

  const parentClassNames = [
    parentClassName || classes.component,
    compact ? classes.compact : null,
  ].join(" ");

  const buttonProps = {
    wash,
    animateOnTap,
    parentClassName: parentClassNames,
  };
</script>

<Button {...buttonProps} {...$$props} label={undefined}>
  <div class={classes.content}>
    <Icon {...$$props}>
      <!-- Icon contents -->
      <slot />
    </Icon>
  </div>
  <span slot="after">
    {#if label}
      <div class={classes.label}>{label}</div>
    {/if}
  </span>
</Button>
