import m from "mithril";
import testPage from "./page";
import { tests } from "../tests/polythene/tests";

m.route.prefix("#");
const mountNode = document.querySelector("#app");
const routes = {
  "/": testPage("Polythene combined", tests)
};
m.route(mountNode, "/", routes);

