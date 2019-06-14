import App from "./App.svelte";

import "polythene-css/dist/polythene-typography.css";    // Default Material Design styles including Roboto font. Put this import before other CSS.
import "polythene-css/dist/polythene-layout-styles.css";

const app = new App({
	target: document.body,
	props: {},
});

export default app;
