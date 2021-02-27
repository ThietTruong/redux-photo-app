import React from "react";
import Banner from "../../../../components/Banner/Banner";
import PhotoForm from "../../components/PhotoForm/PhotoForm";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "../../PhotoSlice";
import "./AddEdit.scss";
import { useHistory, useParams } from "react-router-dom";
import { randomNumber } from "utils/common";

function AddEdit() {
  let history = useHistory();

  const { photoId } = useParams();

  const isAddMode = !photoId;
  const photo = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );
  const initialValues = isAddMode
    ? { title: "", photo: "", categoryId: null }
    : photo;
  const dispatch = useDispatch();
  console.log("param", photoId);
  const handleSubmit = (values) => {
    const newPhoto = {
      ...values,
      id: randomNumber(1000, 99999),
    };
    if (isAddMode) {
      const action = addPhoto(newPhoto);
      dispatch(action);
    } else {
      const action = updatePhoto(values);
      dispatch(action);
    }
    history.push("/photos");
  };

  //   try {
  //     await setTimeout(() => {
  //       console.log("valuesssss", values);
  //       const action = addPhoto(values);
  //       console.log("action", action);
  //       dispatch(action);
  //       // history.push("/photos");
  //     }, 2000);
  //   } catch (error) {}
  // };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😂"></Banner>
      <div className="photo-edit__form">
        <PhotoForm
          initialValues={initialValues}
          onSubmit={handleSubmit}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
}
export default AddEdit;
