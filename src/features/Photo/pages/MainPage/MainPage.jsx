import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../../../components/Banner/Banner";
import { Link, useHistory } from "react-router-dom";
import { Container, Button } from "reactstrap";
import Images from "../../../../constants/images";
import PhotoList from "features/Photo/components/PhotoList/PhotoList";
import { removePhoto } from "../../PhotoSlice";

function MainPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const photos = useSelector((state) => state.photos);
  const handlePhotoRemoveClick = (photo) => {
    const photoId = photo.id;
    console.log(photoId);
    const action = removePhoto(photoId);
    dispatch(action);
  };
  const handlePhotoEditClick = (photo) => {
    history.push(`/photos/${photo.id}`);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={Images.PINK_BG} />

      <Container className="text-center">
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default MainPage;
