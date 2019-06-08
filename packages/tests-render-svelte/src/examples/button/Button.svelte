<script>
  import Button from "polythene-svelte-button";
  // import Button from "../../../../polythene-svelte/src/button/Button.svelte";
  // import { Button } from "../../lib/button";
  import { ButtonCSS } from "polythene-css";
  import { link } from "svelte-spa-router";
</script>

<div class="page">

  <h1>Button</h1>

  <div class="example">
    <div class="example-info">Regular button</div>
    <Button label="Button" />
  </div>

  <div class="example">
    <div class="example-info">Raised button</div>
    <Button raised label="Button" />
  </div>

  <div class="example">
    <div class="example-info">Inactivated for 2 secs</div>
    <Button raised label="Button" inactivate="2" />
  </div>

  <!-- <div class="example">
    <Button raised>
      <div class="example-info">With slotted label</div>
      <div slot="label">Slot: label</div>
    </Button>
  </div>

  <div class="example">
    <div class="example-info">Slotted content</div>
    <Button raised shadowDepth="1">
      <div>Slot: child</div>
    </Button>
  </div>

  <div class="example">
    <div class="example-info">Before and after</div>
    <Button raised label="Button" shadowDepth="1">
      <span slot="before">Before</span>
      <span slot="after">After</span>
    </Button>
  </div> -->

  <div class="example">
    <div class="example-info">Styled button</div>
    <Button
      raised
      label="Button"
      shadowDepth="1"
      textStyle="color: red"
      testId="A test id" />
  </div>

  <div class="example">
    <div class="example-info">Link to shadow</div>
    <Button url={{ href: '#/shadow', use: link }} raised label="Go" />
  </div>

  <div class="example">
    <div class="example-info">Dropdown</div>
    <Button raised label="Button" dropdown />
  </div>

</div>
