import React from "react";
import { Col, Row } from "reactstrap";
import PhotoCart from "../PhotoCart/PhotoCart";

function PhotoList({ photoList, onPhotoEditClick, onPhotoRemoveClick }) {
  console.log("photolist", photoList);
  return (
    <Row>
      {photoList.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCart
            photo={photo}
            onEditClick={onPhotoEditClick}
            onRemoveClick={onPhotoRemoveClick}
          />
        </Col>
      ))}
    </Row>
  );
}

export default PhotoList;
