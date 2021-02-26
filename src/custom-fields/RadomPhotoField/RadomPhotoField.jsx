import RadomPhoto from "features/Photo/components/RadomPhoto/RadomPhoto";
import { ErrorMessage } from "formik";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";

function RadomPhotoField(props) {
  const { field, form, lable } = props;
  const { name, value, onChange, onBlur } = field;
  const { errors, touched } = form;
  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };
  const showError = touched[name] && errors[name];
  return (
    <FormGroup>
      {lable && <Label for={name}> {lable}</Label>}
      <RadomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />
      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}

export default RadomPhotoField;
