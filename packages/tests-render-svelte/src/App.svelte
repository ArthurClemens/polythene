<script>
	import Router from "svelte-spa-router"; // https://github.com/ItalyPaleAle/svelte-spa-router
	import routes from "./routes";
</script>

<style>

:global(html) {
	background-color: #f6f6f6;
}

:global(body) {
	margin: 0;
}

:global(.page) {
	padding: 0 0 50px 0;
	max-width: 520px;
	margin-left: auto;
	margin-right: auto;
}

:global(.page) h1 {
	color: #333;
	font-size: 46px;
	padding: 0 30px;
}

:global(.example) {
	padding: 30px;
}

:global(.page) h1,
:global(.example) {
	border-left: 5px solid transparent;
}

:global(.example) {
	border-top: 1px solid #eaeaea;
}
:global(.example.pe-dark-tone) {
	border-top: 1px solid #555;
}
:global(.example:not(.pe-dark-tone) + .example.pe-dark-tone) {
	border-top: none;
}
:global(.example.pe-dark-tone + .example:not(.pe-dark-tone)) {
	border-top: none;
}

:global(.example.pe-dark-tone) {
  background-color: #303030;
  color: #777;
}

:global(.example.interactive:not(.pe-dark-tone)) {
  border-left-color: #2196f3;
}
:global(.example.interactive.pe-dark-tone) {
  border-left-color: #015091;
}

:global(.example-component) {
	margin-top: 1em;
}
:global(.example-info) {
	color: #777;
}
:global(.example-info) p {
	margin: 0;
}
:global(.example-info) p + p {
	margin-top: .5em;
}
</style>

<Router {routes}/>
