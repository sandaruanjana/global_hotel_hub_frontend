import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Lightbox from "react-lightbox-component";
import Hero from "../Hero";
import { getHotelById } from "../../utils/APIUtils";
import { ACCESS_TOKEN, BASE_URL } from "../../constants";
import "./ViewReceip.css";

const ViewReceip = (re) => {
  const location = useLocation();
  const hotelData = location.state;
  const [receip, setHotel] = useState(null);

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getHotelById(hotelData?.id, localStorage.getItem(ACCESS_TOKEN))
      .then((recipe) => {
        setHotel(recipe?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching hotel by ID:", error);
      });
  }, [hotelData?.id]);

  useEffect(() => {
   
  }, []);

  const handleClick = () => {
    
  };

  const handleBookClick = () => {
    // Open the Booking.com URL in a new tab/window
    window.open(receip?.url, '_blank');
  };

  return (
    <>
      <Hero cName="hero" title="Book Now" text="We Hope This is You Looking For" />
      <Container>
        <Row className="justify-content-center mt-5 mb-5">
          {isLoading ? (
            // Show loading indicator
            <Col xs={12} className="text-center">
              <p>Loading...</p>
            </Col>
          ) : (
            <>
              <Col xs={10} md={7} lg={5} className="p-0 receip-column">
                <Lightbox
                  images={[
                    {
                      src: `${receip.image_url}`,
                      title: hotelData?.title,
                      description: `${receip.title}`,
                    },
                  ]}
                />
              </Col>
              <Col xs={10} md={7} lg={7} className={`product-details`}>
                <div className="reciep-category">
                  <h4>
                    <Badge pill bg="warning" text="dark">
                      {receip?.category_name}
                    </Badge>
                  </h4>
                </div>
                <h1 style={{ fontWeight: "800" }}>{receip?.title}</h1>
                {/* Display other information from the JSON data */}
                <p>Address: {receip?.address}</p>
                <p>Price: {receip?.price}</p>
                <p>Description: {receip?.description}</p>
                <p>Source: {receip?.source}</p>
                 {/* Book button */}
                 <button className="btn btn-primary" onClick={handleBookClick}>
                  Book Now
                </button>
              </Col>
            </>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ViewReceip;
