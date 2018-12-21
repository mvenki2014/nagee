export const loginFormSchema = {
    name: 'myForm',
    classes: 'myForm myFormClass',
    enableResetButton: false,
    fields: [
        {
            label: 'username',
            name: 'username',
            type: 'email',
            value: null,
            validators: ['required'],
            pattern: new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/),
            order: 1,
            placeholder: 'Email',
            error: 'Enter valid email'
        },
        {
            label: 'password',
            name: 'password',
            type: 'password',
            value: null,
            validators: ['required'],
            pattern: new RegExp(/^[0-9]*$/),
            order: 2,
            placeholder: 'Password',
            error: 'Enter valid password'
        }
    ]
};
