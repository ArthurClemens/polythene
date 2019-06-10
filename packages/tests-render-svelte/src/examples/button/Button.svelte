<script>
  import { Button } from "../../lib/button";
  import { ButtonCSS } from "polythene-css";
  import { link } from "svelte-spa-router";

  ButtonCSS.addStyle(".tests-button-themed-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff",
    color_dark_background: "#2196F3",
    letter_spacing: 0
  });

  $: R_onMouseUpCalled = [];
  const addOnMouseUp = () => {
    R_onMouseUpCalled = [...R_onMouseUpCalled, `onmouseup: ${new Date()}`];
  };


</script>

<div class="page">

  <h1>Button</h1>

  <div class="example">
    <div class="example-info">Regular button</div>
    <div class="example-component">
      <Button label="Button" />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Raised button</div>
    <div class="example-component">
      <Button raised label="Button" />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: inactivate (for 2 secs)</div>
    <div class="example-component">
      <Button label="Button" inactivate="2" />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Themed (color)</div>
    <div class="example-component">
      <Button raised label="Button" className="tests-button-themed-button" />
    </div>
  </div>

  <div class="example pe-dark-tone">
    <div class="example-info">Themed (color) -- dark tone</div>
    <div class="example-component">
      <Button raised label="Button" className="tests-button-themed-button" />
    </div>
  </div>

  <!-- <div class="example">
    <Button raised>
      <div class="example-info">With slotted label</div>
      <div class="example-component">
        <div slot="label">Slot: label</div>
      </div>
    </Button>
  </div>

  <div class="example">
    <div class="example-info">Slotted content</div>
    <div class="example-component">
      <Button raised shadowDepth="1">
        <div>Slot: child</div>
      </Button>
    </div>
  </div>

  <div class="example">
    <div class="example-info">Before and after</div>
    <div class="example-component">
      <Button raised label="Button" shadowDepth="1">
        <span slot="before">Before</span>
        <span slot="after">After</span>
      </Button>
    </div>
  </div> -->

  <div class="example">
    <div class="example-info">Styled button</div>
    <div class="example-component">
      <Button
        raised
        label="Button"
        shadowDepth="1"
        style="color: red"
        testId="A test id" />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Link to shadow</div>
    <div class="example-component">
      <Button url={{ href: '#/shadow', use: link }} raised label="Go" />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: dropdown with label (not interactive) -- see Menu examples</div>
    <div class="example-component">
      <Button label="Button" dropdown />
    </div>
  </div>

  <div class="example">
    <div class="example-info">Option: events (onmouseup)</div>
    <div class="example-component">
      <Button label="Button" events={{
        onmouseup: addOnMouseUp
      }} />
      {#if R_onMouseUpCalled.length}
        <div style="margin-top: 1em;">
          {#each R_onMouseUpCalled as called}
            <div style="border-top: 1px solid #eee; padding: 5px 0; color: #aaa;">{called}</div>
          {/each}
        </div>
      {/if}
    </div>
  </div>

</div>
