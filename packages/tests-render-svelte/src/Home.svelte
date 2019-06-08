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
      <a href="/shadow" use:link>Shadow</a>
    </li>
  </ul>

</div>
