import { CyanoComponentOptions, TransitionAppearanceOptions } from "polythene-core";
import { AppearanceOptions } from "polythene-core-notification";
export { Options, AppearanceOptions, SpawnOptions, show, hide } from "polythene-core-notification";

export const transitions: Partial<TransitionAppearanceOptions>;

export const _Snackbar: (options: CyanoComponentOptions & AppearanceOptions) => any;
