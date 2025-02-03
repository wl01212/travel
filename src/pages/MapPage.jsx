//pages/Map.jsx
import MapItem from "../components/MapItem/MapItem";
import styles from "./map.module.css";
import Header from "../components/Header/Header";
import { Row, Col } from "antd";

export default function Map() {
  return (
    <>
      <div className={styles.container}>
        <Row className={styles.row}>
          <Col
            sm={{ span: 2 }}
            md={{ span: 2 }} /* 調整這裡的寬度 */
            lg={{ span: 4 }} /* 這裡維持不變 */
            className={styles.col_4}
          >
            <Header />
          </Col>
          <Col
            sm={{ span: 20 }}
            md={{ span: 20 }} /* 對應調整這裡的寬度 */
            lg={{ span: 20 }} /* 擴展內容區域 */
            className={styles.col_16}
          >
            <MapItem />
          </Col>
        </Row>
      </div>
    </>
  );
}
