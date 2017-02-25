import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import testPage from "./page";
import { tests } from "../tests/polythene/tests";

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routes = {
  "/": testPage("Polythene combined", tests)
};
m.route(mountNode, "/", routes);

