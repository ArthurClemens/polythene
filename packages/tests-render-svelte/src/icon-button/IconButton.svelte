<script>
  import { IconButton } from "polythene-svelte";
  import { IconButtonCSS } from "polythene-css";
  import { link } from "svelte-spa-router";
  import LockSVG from "./LockSVG.svelte";

  IconButtonCSS.addStyle(".tests-icon-button-themed-icon-button", {
    padding: 24,
    color_light_background: "purple",
    color_dark_background: "orange",
    color_light: "white"
  });

  IconButtonCSS.addStyle(".tests-icon-button-themed-hover", {
    color_light_hover:            "#fff",
    color_light_label_hover:      "#673ab7",
    color_dark_label_hover:       "#fff",
    color_light_background_hover: "#673ab7",
    animation_duration:           "100ms",
  });

  const iconSizeNames = ["small", "regular", "medium", "large"];
</script>

<div class="page">

  <h1>Icon Button</h1>

  <div class="example">
    <div class="example-info">Icon</div>
    <div class="example-component">
      <IconButton>
        <LockSVG />
      </IconButton>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: size</div>
    <div class="example-component">
      {#each iconSizeNames as sizeName}
        <IconButton icon={{ size: sizeName }}>
          <LockSVG />
        </IconButton>
      {/each}
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: label</div>
    <div class="example-component">
      <IconButton label="Label">
        <LockSVG />
      </IconButton>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: disabled</div>
    <div class="example-component">
      <IconButton disabled>
        <LockSVG />
      </IconButton>
    </div>
  </div>

  <div class="example interactive">
    <div class="example-info">Option: wash (true)</div>
    <div class="example-component">
      <IconButton wash>
        <LockSVG />
      </IconButton>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Themed (color and padding)</div>
    <div class="example-component">
      <IconButton className="tests-icon-button-themed-icon-button">
        <LockSVG />
      </IconButton>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Themed (hover color)</div>
    <div class="example-component">
      <IconButton className="tests-icon-button-themed-hover" wash label="Hover">
        <LockSVG />
      </IconButton>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: label (RTL)</div>
    <div class="example-component pe-rtl">
      <IconButton label="ضع الكلمة المناسبة">
        <LockSVG />
      </IconButton>
    </div>
  </div>

</div>
