import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function InputField(props) {
  const { field, form, placeholder, label, type, disabled = false } = props;
  const { value, name, onChange, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        id={name}
        {...field}
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        invalid={showError}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default InputField;
