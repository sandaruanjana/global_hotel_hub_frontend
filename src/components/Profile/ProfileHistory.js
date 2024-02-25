import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ProfileHistory.css";
import { useEffect, useState } from "react";
import { ACCESS_TOKEN } from "../../constants";
import { getSearchHistory } from "../../utils/APIUtils";


const ProfileHistory = () => {


  const [historyData, setHistoryData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSearchHistory(localStorage.getItem(ACCESS_TOKEN))
      .then((h) => {
        setHistoryData(h?.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile", error);
      });
  }, []);

  
  if (!historyData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container>
        <Row className="justify-content-center mt-5 mb-5">
          <Col xs={12} className="text-center">
            <h2>Profile Search History</h2>
          </Col>
          <Col xs={10} md={7} lg={7} className="history-column">
            {historyData.map((item) => (
              <div className="history-item" key={item.id}>
                <div className="history-details">
                  <h4>
                    <Badge pill bg="warning" text="dark">
                      {item.category_name}
                    </Badge>
                  </h4>
                  <h3>Location : {item.location}</h3>
                  <p>Source: {item.source}</p>
                  {/* Additional details based on your data */}
                </div>
                {/* <div className="history-actions">
                  <Link to={`/history/${item.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div> */}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProfileHistory;
