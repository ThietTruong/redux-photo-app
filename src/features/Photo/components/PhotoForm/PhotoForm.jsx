import React from "react";
import { FormGroup, Label, Button, Input, Spinner } from "reactstrap";
import Select from "react-select";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import { FastField, Form, Formik } from "formik";
import InputField from "custom-fields/InputField/InputField";
import SelectField from "custom-fields/Select-Field/SelectField";
import RadomPhotoField from "../../../../custom-fields/RadomPhotoField/RadomPhotoField";
import * as Yup from "yup";

function PhotoForm({ onSubmit, initialValues, isAddMode }) {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is require"),
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is require"),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { value, touched, errors, isSubmitting } = formikProps;
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg:Wow nature..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField name="photo" component={RadomPhotoField} label="Photo" />

            <FormGroup>
              <Button color={isAddMode ? "primary" : "success"} type="submit">
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to album" : "Update your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
