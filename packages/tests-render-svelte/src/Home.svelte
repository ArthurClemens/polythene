<script>
  import { link } from "svelte-spa-router";
</script>

<div>
  Home
  <ul>
    <li>
      <a href="/button" use:link>Button</a>
    </li>
    <li>
      <a href="/icon" use:link>Icon</a>
    </li>
    <li>
      <a href="/icon-button" use:link>Icon Button</a>
    </li>
    <li>
      <a href="/shadow" use:link>Shadow</a>
    </li>
    <li>
      <a href="/svg" use:link>SVG</a>
    </li>
  </ul>

</div>
