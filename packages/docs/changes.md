# Change log

## Version 0.3

This is a maintenance release with some small changes to ease migration to version 1.0.

### Importing components 

The ideomatic way to import components is now by importing from module `polythene`. 

0.2:

```javascript
import styler from 'polythene/button/button';
import button from 'polythene/button/button';
```

0.3:

```javascript
import { Button } from 'polythene';
```

Version 0.2 imports are still supported though.

The importing of Polythene theme is similar:

```javascript
import { Theme } from 'polythene';
```

### SVG dynamic loading removed

Dynamic loading and preloading have been removed, as these are infrequent use cases.


### Repo setup

Polythene is now a monorepo using Lerna.


### Module versions

* The `umd` transpiled module is `polythene/index.js`
* The `es` transpiled module is `polythene/index.mjs`
