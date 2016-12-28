# Tools

* webfontLoader


## Web font loader

Loads one or more webfonts (multiple vendors) through Google's webfont loader. This is a simple script; no callback functionality is implemented.

Usage:

~~~javascript
import { webfontLoader } from "polythene-tools";

webfontLoader.add("google", "Roboto:400,500,700,400italic:latin");
webfontLoader.add("google", "Raleway:400,500,600:latin");
~~~
