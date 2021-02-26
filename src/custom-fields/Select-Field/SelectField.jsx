import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Input, Label } from "reactstrap";

function SelectField(props) {
  const {
    field,
    form,
    placeholder,
    id,
    options,
    label,
    disabled = false,
  } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const selectedOption = options.find((option) => option.value === value);
  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };
  const showError = touched[name] && errors[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? "is-invalid" : ""}
      />
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default SelectField;
