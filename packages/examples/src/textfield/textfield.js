import m from 'mithril';
import { Button, TextField, styler } from 'polythene';
import rgbSlider from '../slider/slider-rgb';
import style from './textfield-style';
styler.add('polythene-examples-textfield', style);

const ipsum = 'Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.';

const shortIpsum = 'Lorem ipsum dolor sit amet,';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            args.content
        ]);
    }
};

const module = {};
module.controller = () => {
    return {
        focusState: false
    };
};
module.view = (ctrl) => {
    return m('.module-textfield', [

        m('.p-block.p-block-info',
            m('p', [
                'See text field in use at ',
                m('a', {href: '/search', config: m.route}, 'Search'),
                ' and ',
                m('a', {href: '/validation', config: m.route}, 'Validation'),
                '.',
            ])
        ),

        m(titleBlock, {
            title: 'Default text fields',
            content: m('.form', [
                m(TextField, {
                    value: 'Some input with autofocus',
                    autofocus: true
                }),
                m(TextField, {
                    value: 'Some input'
                }),
                m(TextField, {
                    value: 'Some input'
                })
            ])
        }),

        m(titleBlock, {
            title: 'Password, number, email',
            content: m('.form', [
                m(TextField, {
                    type: 'password',
                    value: 'Some input'
                }),
                m(TextField, {
                    type: 'number',
                    value: '1234'
                }),
                m(TextField, {
                    type: 'email',
                    value: 'a@b.com'
                })
            ])
        }),

        m(titleBlock, {
            title: 'Hint label',
            content: m('.form', [
                m(TextField, {
                    label: 'Your name'
                }),
                m(TextField, {
                    label: 'Your email'
                }),
                m(TextField, {
                    label: 'Your address'
                })
            ])
        }),

        m(titleBlock, {
            title: 'Floating hint label',
            content: m('.form', [
                m(TextField, {
                    label: 'Your name',
                    floatingLabel: true
                }),
                m(TextField, {
                    label: 'Your email',
                    floatingLabel: true
                }),
                m(TextField, {
                    label: 'Your address',
                    floatingLabel: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Dense floating hint label',
            content: m('.form', [
                m(TextField, {
                    label: 'Your name',
                    floatingLabel: true,
                    dense: true
                }),
                m(TextField, {
                    label: 'Your email',
                    floatingLabel: true,
                    dense: true
                }),
                m(TextField, {
                    label: 'Your address',
                    floatingLabel: true,
                    dense: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Helper message: permanent and on focus',
            content: m('.form', [
                m(TextField, {
                    label: 'Your Name',
                    floatingLabel: true,
                    help: 'Enter the name as written on the credit card'
                }),
                m(TextField, {
                    label: 'Your Name',
                    floatingLabel: true,
                    help: 'Enter the name as written on the credit card',
                    focusHelp: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Full width text fields',
            content: m('.form.fullWidth', [
                m(TextField, {
                    label: 'To',
                    fullWidth: true
                }),
                m(TextField, {
                    label: 'Subject',
                    fullWidth: true
                }),
                m(TextField, {
                    label: 'Message',
                    fullWidth: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Dense full width text fields',
            content: m('.form.fullWidth', [
                m(TextField, {
                    label: 'To',
                    fullWidth: true,
                    dense: true
                }),
                m(TextField, {
                    label: 'Subject',
                    fullWidth: true,
                    dense: true
                }),
                m(TextField, {
                    label: 'Message',
                    fullWidth: true,
                    dense: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Multi-line',
            content: m('.form', [
                m(TextField, {
                    label: 'Label in multi-line input',
                    multiline: true,
                    rows: 2
                }),
                m(TextField, {
                    label: 'Floating label in multi-line input',
                    floatingLabel: true,
                    multiline: true,
                    rows: 2
                }),
                m(TextField, {
                    value: '4 rows: ' + ipsum,
                    multiline: true,
                    rows: 4
                })
            ])
        }),

        m(titleBlock, {
            title: 'Required field',
            info: m('p', m.trust('By default the to-be-validated fields are validated only after user interaction. This to prevent screaming red errors everywhere when the page loads.')),
            content: m('.form', [
                m(TextField, {
                    label: 'Your Name',
                    floatingLabel: true,
                    help: 'Enter the name as written on the credit card',
                    required: true
                }),
                m(TextField, {
                    label: 'Your Name',
                    floatingLabel: true,
                    help: 'This required field does not show a *',
                    error: 'Please enter your name',
                    focusHelp: true,
                    required: true,
                    hideRequiredMark: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Validation: max length',
            info: m('p', m.trust('Uses HTML5 constraints. Testing "maxlength: 3". Will not generate an error.')),
            content: m('.form', m(TextField, {
                value: '123',
                maxlength: 3,
                error: 'Enter max 3 characters'
            }))
        }),

        m(titleBlock, {
            title: 'Validation: min and max value',
            info: m('p', m.trust('Uses HTML5 constraints.')),
            content: m('.form', [
                m(TextField, {
                    type: 'number',
                    min: 3,
                    max: 9,
                    value: 10,
                    error: 'Enter a value between 3 and 9'
                })
            ])
        }),

        m(titleBlock, {
            title: 'Validation: email (and required)',
            info: m('p', m.trust('Uses HTML5 constraints.')),
            content: m('.form', [
                m(TextField, {
                    label: 'Email',
                    type: 'email',
                    value: 'a@com',
                    required: true,
                    error: 'Enter a valid email address'
                })
            ])
        }),

        m(titleBlock, {
            title: 'Validation: pattern',
            info: m('p', m.trust('Uses HTML5 constraints.')),
            content: m('.form', [
                m(TextField, {
                    label: 'Number',
                    type: 'text',
                    value: 'abc',
                    pattern: '[0-9]+',
                    error: 'Enter a number',
                    validateAtStart: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Custom validation',
            info: m('p', m.trust('Testing lowercase.')),
            content: m('.form', m(TextField, {
                value: 'abC',
                validate: (value) => {
                    if (value !== value.toLowerCase()) {
                        return {
                            valid: false,
                            error: 'Only use lowercase characters.'
                        };
                    }
                },
                validateAtStart: true
            }))
        }),

        m(titleBlock, {
            title: 'Counter without validation',
            content: m('.form', m(TextField, {
                label: 'Description',
                floatingLabel: true,
                value: shortIpsum,
                counter: 30
            }))
        }),

        m(titleBlock, {
            title: 'Counter with validation',
            info: m('p', m.trust('Uses HTML5 constraints.')),
            content: m('.form', m(TextField, {
                label: 'Description',
                floatingLabel: true,
                value: shortIpsum,
                counter: 30,
                maxlength: 30,
                error: 'You have exceeded the maximum number of characters.'
            }))
        }),

        m(titleBlock, {
            title: 'Give focus',
            content: m('.form', [
                m(TextField, {
                    label: 'Your name',
                    focus: ctrl.focusState,
                    getState: (state) => (ctrl.focusState = state.focus)
                }),
                m(Button, {
                    label: 'Give focus',
                    raised: true,
                    events: {
                        onclick: () => (ctrl.focusState = true)
                    }
                })
            ])
        }),

        m(titleBlock, {
            title: 'Update value from outside',
            class: 'rgb',
            content: m(rgbSlider)
        }),

        m(titleBlock, {
            title: 'Disabled label',
            content: m('.form', [
                m(TextField, {
                    label: 'Your name',
                    disabled: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Disabled input',
            content: m('.form', [
                m(TextField, {
                    value: 'John',
                    disabled: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Readonly input',
            content: m('.form', [
                m(TextField, {
                    value: 'Your name',
                    readonly: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme: hint label',
            class: 'pe-dark-theme',
            content: m('.form', m(TextField, {
                label: 'Your name'
            }))
        }),

        m(titleBlock, {
            title: 'Dark theme: floating hint label',
            class: 'pe-dark-theme',
            content: m('.form', m(TextField, {
                label: 'Your name',
                floatingLabel: true
            }))
        }),

        m(titleBlock, {
            title: 'Dark theme: validation error',
            class: 'pe-dark-theme',
            content: m('.form', [
                m(TextField, {
                    label: 'Email',
                    type: 'email',
                    value: '.com',
                    required: true,
                    error: 'Enter a valid email address',
                    validateAtStart: true
                })
            ])
        }),

        m(titleBlock, {
            title: 'Dark theme: disabled',
            class: 'pe-dark-theme',
            content: m('.form', m(TextField, {
                value: 'Input text',
                disabled: true
            }))
        }),

        m(titleBlock, {
            title: 'Dark theme: readonly',
            class: 'pe-dark-theme',
            content: m('.form', m(TextField, {
                value: 'Your name',
                readonly: true
            }))
        })

    ]);
};

export default module;
