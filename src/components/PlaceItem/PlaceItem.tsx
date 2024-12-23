import styles from "./placeitem.module.css";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

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


const PlaceItem = ({ place }: PlaceDetailProps) => {
  return (
    <>
      <Row>
        <Col>
          <Link to={`/places/id/${place.id}`}>
            <img src={place.image} alt="" width="100%" />
          </Link>
          <p 
      className={`${styles.h1}`}>{place.name}</p>
        </Col>
      </Row>
    </>
  );
};

export default PlaceItem;
