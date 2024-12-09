import Header from "../components/Header/Header";
import ScheduleList from "../components/ScheduleList/ScheduleList";
import styles from "./schedule.module.css";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <Header />
      <ScheduleList />
    </div>
  );
};
export default Schedule;
