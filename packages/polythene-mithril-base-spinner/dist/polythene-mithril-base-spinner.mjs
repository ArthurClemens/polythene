import { StateComponent } from 'polythene-mithril-base';
import { coreBaseSpinner } from 'polythene-core-base-spinner';
import { Shadow } from 'polythene-mithril-shadow';

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

const BaseSpinner = StateComponent(Object.assign({}, coreBaseSpinner, {
  createContent: (vnode, args) => coreBaseSpinner.createContent(vnode, Object.assign(args, {
    Shadow
  }))
}));
BaseSpinner.classes = classes;
BaseSpinner.displayName = "BaseSpinner";

export { BaseSpinner };
