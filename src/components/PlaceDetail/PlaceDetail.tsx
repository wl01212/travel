import { Row, Col, Button } from "antd";
import { useNavigate } from "react-router-dom";

// 定义 Place 类型
export interface Place {
  id: string
  image: string;
  name: string;
  description: string;
}

export interface PlaceDetailProps {
  place: Place; // 使用 Place 类型来指定 place 的结构
}

const PlaceDetail = ({ place }: PlaceDetailProps) => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
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
