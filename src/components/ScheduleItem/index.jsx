import { Link } from "react-router-dom";

export default function ScheduleItem({ schedule }) {
  const startDate = new Date(schedule.time[0]);
  const endDate = new Date(schedule.time[1]);
  const startTime = `${startDate.getMonth() + 1}/${startDate.getDate()}`;
  const endTime = `${endDate.getMonth() + 1}/${endDate.getDate()}`;
  return (
    <>
      <Link to={`/schedule/${schedule.scheduleId}`}>
        <div className={styles.favoritebox}>
          <div className={styles.placebox}>
            <img src={Logo} alt="logo" width={"40px"} />
            <h2 className={styles.name}>{schedule.scheduleName}</h2>
          </div>
          <div>
            <h2 className={styles.date}>
              {startTime}~{endTime}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
}
