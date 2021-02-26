import React from "react";
import Banner from "../../../../components/Banner/Banner";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import "./AddEdit.scss";
function AddEdit() {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😂"></Banner>
      <div className="photo-edit__form">
        <PhotoForm />
      </div>
    </div>
  );
}
export default AddEdit;
