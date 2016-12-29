import { appConfig } from "polythene-config";

const rgba = appConfig.rgba;

export default {
  size_regular: 7 * appConfig.grid_unit_component,
  size_mini: 5 * appConfig.grid_unit_component,
  padding_regular: 2 * appConfig.grid_unit_component,

  color_light_background: rgba(appConfig.color_primary),
  color_light_text: rgba(appConfig.color_primary_foreground),

  color_dark_background: rgba(appConfig.color_primary),
  color_dark_text: rgba(appConfig.color_primary_foreground)
};
