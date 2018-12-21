export const loginFormSchema = {
    name: 'myForm',
    classes: 'myForm myFormClass',
    enableResetButton: true,
    fields: [
        {
            label: 'name',
            name: 'name',
            type: 'text',
            value: 'Ajay',
            validators: ['required'],
            pattern: '/^[a-z][a-z\s]*$/',
            order: 1,
            placeholder: 'Name',
            error: 'Enter valid data'
        },
        {
            label: 'age',
            name: 'age',
            type: 'number',
            value: null,
            validators: ['required'],
            pattern: '/^[0-9]*$/',
            order: 2,
            placeholder: 'Age',
            error: 'Enter valid data'
        },
        {
            label: 'file',
            name: 'file',
            type: 'file',
            value: null,
            validators: ['required'],
            order: 3,
            placeholder: 'file',
            error: 'Enter valid data'
        }
    ]
};
