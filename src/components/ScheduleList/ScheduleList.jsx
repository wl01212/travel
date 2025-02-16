import styles from "./schedule.module.css";
import { Col, Row } from "antd";
import ScheduleItem from "../ScheduleItem";
import { useSelector } from "react-redux";

export default function ScheduleList() {
  const selectSchedule = useSelector((store) => store.attraction) || [];
  return (
    <>
      <div className={styles.containerbox}>
        <h1 className={styles.title}>Your Schedule List</h1>
        <Row className={styles.container}>
          {selectSchedule.map((schedule) => (
            <Col key={schedule.scheduleId} span={24} className={styles.col}>
              <ScheduleItem key={schedule.scheduleId} schedule={schedule} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
