<script>
	import Router from "svelte-spa-router"; // https://github.com/ItalyPaleAle/svelte-spa-router
	import routes from "./routes";
</script>

<style>
:global(.page) {
	padding: 20px 20px 70px 20px;
}

:global(.page) h1 {
	color: #333;
	margin-top: 0;
	font-size: 30px;
}

:global(.example) + .example {
	margin-top: 50px;
}
:global(.example-info) {
	margin: 1em 0;
}
:global(.example-info) p {
	margin: 0;
}
:global(.example-info) p + p {
	margin-top: .5em;
}
</style>

<Router {routes}/>
