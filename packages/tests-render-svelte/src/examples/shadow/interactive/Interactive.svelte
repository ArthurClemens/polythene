<script>
  import { depth } from "./stores.js";
  import { Shadow } from "../../../lib/shadow";
  import { ShadowCSS } from "polythene-css";

  ShadowCSS.addStyle(".example-shadow-themed-transition", {
    transition: `box-shadow .25s ease-in-out`
  });

  let shadowDepth;

  const unsubscribe = depth.subscribe(value =>
    shadowDepth = value
  );

  const increment = () =>
		depth.update(n => (n + 1) % 6);
	
</script>

<div class="example interactive">
  <div class="example-info">
    <p>Themed shadow transition</p>
    <p>The shadowDepth is: {shadowDepth}. Click to change.</p>
  </div>
  <div class="example-component">
    <div class="shadow-example" on:click={increment}>
      <Shadow
        className="example-shadow-themed-transition"
        shadowDepth={shadowDepth}
        animated
      />
    </div>
  </div>
</div>
