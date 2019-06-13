<script>
  import { Shadow } from "../../lib/shadow";
  import Interactive from "./interactive/Interactive.svelte";
  import { ShadowCSS } from "polythene-css";

  ShadowCSS.addStyle(".example-shadow-themed-shadow", {
    shadow_bottom_depth_1: "10px 10px 10px 0px rgba(142, 36, 170, 0.3)"
  });

  ShadowCSS.addStyle(".example-shadow-themed-shadow-depth", {
    shadow_depth: 3
  });
</script>

<style>
  :global(.shadow-example) {
    position: relative;
    width: 100%;
    height: 80px;
  }
</style>

<div class="page">

  <h1>Shadow</h1>

  <div class="example">
    <div class="example-info">
      <p>shadowDepth="1"</p>
    </div>
    <div class="example-component">
      <div class="shadow-example">
        <Shadow shadowDepth="1" />
      </div>
    </div>
  </div>

  <div class="example">
    <div class="example-info">
      <p>shadowDepth="3"</p>
    </div>
    <div class="example-component">
      <div class="shadow-example">
        <Shadow shadowDepth="3" />
      </div>
    </div>
  </div>

  <div class="example">
    <div class="example-info">
      <p>shadowDepth="5"</p>
    </div>
    <div class="example-component">
      <div class="shadow-example">
        <Shadow shadowDepth="5" />
      </div>
    </div>
  </div>

  <div class="example">
    <div class="example-info">
      <p>shadowDepth="0"</p>
    </div>
    <div class="example-component">
      <div class="shadow-example">
        <Shadow shadowDepth="0" />
      </div>
    </div>
  </div>

  <div class="example">
    <div class="example-info">
      <p>Themed shadow</p>
    </div>
    <div class="example-component">
      <div class="shadow-example">
        <Shadow
          className="example-shadow-themed-shadow"
          style="background-color: rgba(243, 229, 245,1.0)" />
      </div>
    </div>
  </div>

  <div class="example">
    <div class="example-info">
      <p>Themed shadow depth</p>
    </div>
    <div class="example-component">
      <div class="shadow-example">
        <Shadow className="example-shadow-themed-shadow-depth" />
      </div>
    </div>
  </div>

  <Interactive />

</div>
