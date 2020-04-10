export const textComponentMock = {
  fieldName: "",
  fieldLabel: "",
  fieldType: "",
  defaultValue: "",
  value: "",
  properties: {
    htmlType: "text",
    visible: true,
    filter: true,
    export: true
  },
  validations: [
    {
      required: true
    },
    {
      minLength: 5
    },
    {
      maxLength: 20
    },
    {
      regExp: ""
    }
  ],
  source: {},
  relation: {}
};
