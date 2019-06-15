<script>
  import { SVG } from "polythene-svelte";
  import { SVGCSS } from "polythene-css";
  import StarSVG from "./StarSVG.svelte";

  let showStyle = false;
  let initialStyle = "color: inherit";
  let style = undefined;

  const toggleStyle = () => {
    showStyle = !showStyle;
    if (showStyle) {
      style = "color: #EF6C00";
    } else {
      style = initialStyle;
    }
  };

  SVGCSS.addStyle(".tests-svg-themed-svg", {
    color_light: "#0D47A1",
    color_dark: "orange"
  });
</script>

<div class="page">

  <h1>SVG</h1>

  <div class="example">
    <div class="example-info">Child content</div>
    <div class="example-component">
      <SVG>
        <StarSVG />
      </SVG>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Style</div>
    <div class="example-component">
      <button on:click={toggleStyle}>Toggle</button>
      <SVG {style}>
        <StarSVG />
      </SVG>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Themed (color)</div>
    <div class="example-component">
      <SVG className="tests-svg-themed-svg">
        <StarSVG />
      </SVG>
    </div>
  </div>

  <div class="example pe-dark-tone">
    <div class="example-info">Child content -- dark tone</div>
    <div class="example-component">
      <SVG>
        <StarSVG />
      </SVG>
    </div>
  </div>

  <div class="example pe-dark-tone">
    <div class="example-info">Themed (color) -- dark tone</div>
    <div class="example-component">
      <SVG className="tests-svg-themed-svg">
        <StarSVG />
      </SVG>
    </div>
  </div>

  <!-- <div class="example">
    <div class="example-info">Before and after</div>
    <div class="example-component">
      <SVG>
        <span slot="before">Before</span>
        <StarSVG />
        <span slot="after">After</span>
      </SVG>
    </div>
  </div> -->

</div>
