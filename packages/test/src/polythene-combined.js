import m from "mithril";
import "polythene-fastclick";
import "polythene-material-design";
import testPage from "./page";
import { tests as polytheneTests } from "../tests/polythene/tests";

const pages = [
  {
    path: "/polythene",
    name: "Polythene",
    tests: polytheneTests
  }
];

m.route.prefix("#");
const mountNode = document.querySelector("#app");
m.mount(mountNode, testPage(pages[0].name, pages[0].tests));
