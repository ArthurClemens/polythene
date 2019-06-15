<script>
  import { Button } from "../button";
  import { Icon } from "../icon";
  import classes from "polythene-css-classes/icon-button";

  export let compact = false;
  export let icon = undefined;
  export let label = undefined;
  export let parentClassName = undefined;

  const parentClassNames = [
    parentClassName || classes.component,
    compact ? classes.compact : null,
  ].join(" ");

  const defaultButtonProps = {
    wash: false,
    animateOnTap: false,
    parentClassName: parentClassNames,
  };

  // Reset pass through
  delete $$props.icon;
  delete $$props.label;

</script>

<Button {...defaultButtonProps} {...$$props}>
  <div class={classes.content}>
    <Icon {...icon}>
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
