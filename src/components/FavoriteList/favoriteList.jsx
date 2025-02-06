import styles from "./favorite.module.css";
import { useSelector } from "react-redux";
import { Row, Col } from "antd";
import FavoriteItem from "../FavoriteItem";

export default function FavoriteList() {
  const favorite = useSelector((state) => state.favorite)||[];
  
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>我的最愛</h1>
        <Row className={styles.container}>
        {favorite.map((place) => (
          <Col key={place.id} span={24} className={styles.col}>
            <FavoriteItem place={place} />
          </Col>
        ))}
        </Row>
      </div>
    </>
  );
}