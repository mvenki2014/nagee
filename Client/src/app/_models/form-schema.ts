export class Field {
    label?: String;
    name: String;
    type: String;
    validators?: Array<String>;
    pattern?: String;
    order?: Number;
    options?: Array<any>;
    value?: any;
    placeholder?: String;
    error?: String;
}

export class FormSchema {
    name: String;
    classes?: String;
    fields: Array<Field>;
    enableResetButton?: Boolean;
}
