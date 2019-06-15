<script>
  import classes from "polythene-css-classes/button";
  
  export let label = "";
  export let textStyle = undefined;
</script>

<div class={classes.label}>
  <div class={classes.textLabel} style={textStyle}>
    {label}
  </div>
</div>
