<script>
  import { Icon } from "../../lib/icon";
  import StarSVG from "./StarSVG.svelte";
  import { IconCSS } from "polythene-css";

  const sizeNames = ["small", "regular", "medium", "large"];

  IconCSS.addStyle(".tests-icon-themed-icon", {
    size_regular: 50,
    color_light: "purple",
    color_dark: "orange"
  });
</script>

<div class="page">

  <h1>Icon</h1>

  <div class="example">
    <div class="example-info">Child content</div>
    <div class="example-component">
      <Icon>
        <StarSVG />
      </Icon>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Child content</div>
    <div class="example-component">
      <Icon>
        <StarSVG />
      </Icon>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: size</div>
    <div class="example-component">
      {#each sizeNames as sizeName}
        <Icon size={sizeName}>
          <StarSVG />
        </Icon>
      {/each}
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: src (size large)</div>
    <div class="example-component">
      <Icon
        src="http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
        size="large" />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: avatar (size large)</div>
    <div class="example-component">
      <Icon
        src="http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
        size="large"
        avatar />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Style (color)</div>
    <div class="example-component">
      <Icon style="color: #EF6C00">
        <StarSVG />
      </Icon>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Themed (color and size)</div>
    <div class="example-component">
      <Icon className="tests-icon-themed-icon">
        <StarSVG />
      </Icon>
    </div>
  </div>

  <div class="example pe-dark-tone">
    <div class="example-info">Option: size -- dark tone</div>
    <div class="example-component">
      {#each sizeNames as sizeName}
        <Icon size={sizeName}>
          <StarSVG />
        </Icon>
      {/each}
    </div>
  </div>

  <div class="example pe-dark-tone">
    <div class="example-info">Themed (color and size) -- dark tone</div>
    <div class="example-component">
      <Icon className="tests-icon-themed-icon">
        <StarSVG />
      </Icon>
    </div>
  </div>

</div>
