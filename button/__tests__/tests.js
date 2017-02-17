import m from 'mithril';
import component from 'polythene/button/button';

export const tests = [
  {
    name: 'Option: label',
    component,
    attrs: {
      label: 'Label'
    }
  },
  {
    name: 'Option: wash (false)',
    interactive: true,
    component,
    attrs: {
      label: 'No wash',
      wash: false
    }
  },
  {
    name: 'Option: ink (false)',
    interactive: true,
    component,
    attrs: {
      label: 'No ink',
      ink: false
    }
  },
  {
    name: 'Option: disabled (true)',
    interactive: true,
    component,
    attrs: {
      label: 'Disabled',
      disabled: true
    }
  },
  {
    name: 'Option: disabled (false)',
    interactive: true,
    component,
    attrs: {
      label: 'Not disabled',
      disabled: false
    }
  },
  {
    name: 'Option: selected',
    component,
    attrs: {
      label: 'Selected',
      selected: true
    }
  },
  {
    name: 'Option: formaction',
    component,
    attrs: {
      label: 'Form action',
      formaction: 'http://polythene.js.org'
    }
  },
  {
    name: 'Option: url (with oncreate)',
    interactive: true,
    component,
    attrs: {
      label: 'Go to /#/shadow',
      url: {
        href: '/shadow',
        config: m.route.config
      }
    }
  },
  {
    name: 'Option: url (without oncreate)',
    interactive: true,
    component,
    attrs: {
      label: 'Go to /shadow',
      url: {
        href: '/shadow'
      }
    }
  },
  {
    name: 'Option: inactive (false)',
    interactive: true,
    component,
    attrs: {
      label: 'Not inactive',
      inactive: false
    }
  },
  {
    name: 'Option: inactive (true)',
    interactive: true,
    component,
    attrs: {
      label: 'Inactive',
      inactive: true
    }
  },
  {
    name: 'Option: inactivate (2)',
    interactive: true,
    component,
    attrs: {
      label: 'Inactivated for 2s',
      inactivate: 2
    }
  }
];
