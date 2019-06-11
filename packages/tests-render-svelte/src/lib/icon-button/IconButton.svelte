<script>
  import { Button } from "../button";
  import { Icon } from "../icon";
  import classes from "polythene-css-classes/icon-button";

  export let border = false;

  const buttonProps = {
    ...border
  };
</script>

<div>
  <Button {...buttonProps} />
</div>
