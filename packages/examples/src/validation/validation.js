import m from 'mithril';
import { Button, TextField, Notification, ValidationHelper, styler } from 'polythene';
import style from './validation-style';
styler.add('polythene-examples-validation', style);

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

const validationHelper = new ValidationHelper({
    element: 'el',
    invalid: 'invalid'
});

const module = {};
module.view = () => {
    return m('.example-validation', [
        m(titleBlock, {
            title: 'Form with input fields',
            info: m('p', 'This form uses "polythene/common/validation-helper" to only submit the form when all fields are valid, and on submit to jump to the next invalid field.'),
            content: m('.form-container layout center-center',
                m('#notifications.pe-fit.layout.center-center',
                    m(Notification)
                ),
                m('form.form',
                    {
                        onsubmit: (e) => (validationHelper.submit(e, () => {
                            Notification.show({
                                containerSelector: '#notifications',
                                title: 'Form submitted!',
                                timeout: 1.5
                            });
                        })),
                        novalidate: true
                    }, m('.fields', [
                        m(TextField, {
                            label: 'First name',
                            floatingLabel: true,
                            autofocus: true,
                            required: true,
                            error: 'Please fill out your first name',
                            getState: validationHelper.update
                        }),
                        m(TextField, {
                            label: 'Last name',
                            floatingLabel: true,
                            required: true,
                            error: 'Please fill out your last name',
                            getState: validationHelper.update
                        }),
                        m(TextField, {
                            type: 'email',
                            label: 'Your email address',
                            floatingLabel: true,
                            required: true,
                            error: 'Please fill out your email address',
                            getState: validationHelper.update
                        }),
                        m(TextField, {
                            type: 'password',
                            label: 'Your password',
                            floatingLabel: true,
                            required: true,
                            error: 'Please enter your password',
                            getState: validationHelper.update
                        })
                    ]),
                    m('.footer', [
                        m(Button, {
                            tag: 'button',
                            type: 'submit',
                            label: 'Send',
                            raised: true,
                            disabled: Notification.count() !== 0
                        })
                    ])
                )
            )
        })
    ]);
};

export default module;
