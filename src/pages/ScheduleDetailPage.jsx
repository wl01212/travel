import Header from "../../components/Header/Header";
import ScheduleDetail from "../../components/ScheduleDetail";
import styles from "./scheduleDetail.module.css";
import { Row, Col } from "antd";

export default function ScheduleDetailPage() {
  return (
    <>
      <div className={styles.container}>
        <Row className={styles.row}>
          <Col
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 4 }}
            className={styles.col_4}
          >
            <Header />
          </Col>
          <Col
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 16 }}
            className={styles.col_16}
          >
            <ScheduleDetail />
          </Col>
        </Row>
      </div>
    </>
  );
}
