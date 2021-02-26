import React from "react";
import Banner from "../../../../components/Banner/Banner";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import Images from "../../../../constants/images";

function MainPage() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photo" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;
