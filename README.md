# Polythene v1.0

## Guides 

* [Migrating from 0.2 to 1.x](Migration.md)
* [Theming](packages/polythene-theme/README.md)


## Development

Polythene is now a monorepo. Components are located inside the "packages" directory.

* `npm install`
* `lerna bootstrap` - symlinks all component packages
* `lerna run build` - builds all components (in each dist directory)
* `lerna run clean` - removes all dist directories

### Testing

Includes Jest snapshots and a viewer to verify the output.

* `cd packages/test`
* `npm install`

Build files:

* `npm run build` - builds files in `dist`
* `npm run dev` - uses [Wright](https://github.com/porsager/Wright) to start a Chrome live development server

Update snapshots:

* `npm run test`
* `npm run test:watch`

