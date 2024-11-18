import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

const PlaceDetail = ({ place }) => {
    const navigate = useNavigate();
    const handleBack=()=>{
        navigate("/")
    };
  return (
    <>
      <Row>
        <Col lg={{ span: 8 }}>
          <img src={place.image} alt="" width="100%" />
        </Col>

        <Col lg={{ span: 16 }}>
          <Row>
            <Col>
              <h2>{place.name}</h2>
            </Col>
          </Row>
          <Row>
            <h2>{place.description}</h2>
          </Row>
          <Row>
            <Col>
              <Button onClick={handleBack}>返回</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default PlaceDetail;


