<script>
  import { Ripple } from "../../lib/ripple";
  import { RippleCSS } from "polythene-css";

  RippleCSS.addStyle(".tests-ripple-themed-ripple", {
    color_light: "#F44336"
  });
</script>

<style>
  :global(.ripple-example) {
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #fff;
  }
</style>

<div class="page">

  <h1>Ripple</h1>

  <div class="example interactive">
    <div class="example-info">No options</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: unconstrained</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple unconstrained />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: center</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple center />
      </div>
    </div>
  </div>
  
  <div class="example interactive">
    <div class="example-info">Option: startOpacity (0.5)</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple startOpacity={0.5} />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: endOpacity (1)</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple endOpacity={1} />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: duration (3)</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple duration={3} />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: multi, duration</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple multi duration={1.5} />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: initial opacityDecayVelocity (0.1)</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple opacityDecayVelocity={0.1} />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: disabled</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple disabled />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: style (color)</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple style="color: #2196F3" startOpacity={0.7} />
      </div>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Themed (end with permanent red)</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple className="tests-ripple-themed-ripple" endOpacity={1.0} persistent />
      </div>
    </div>
  </div>

  <div class="example interactive pe-dark-tone">
    <div class="example-info">Option: style (white) -- dark tone class</div>
    <div class="example-component">
      <div class="ripple-example">
        <Ripple style="color: #fff;" />
      </div>
    </div>
  </div>

</div>
