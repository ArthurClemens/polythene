# Polythene rewrite


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
* `npm run dev` - WIP

Update snapshots:

* `npm run test`
* `npm run test:watch`

