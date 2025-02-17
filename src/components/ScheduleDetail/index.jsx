import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "./schedule.module.css";
import { updateLandmarkOrder } from "/src/store/schedule.js";

const ScheduleDetail = () => {
  const { scheduleId } = useParams(); // 從路由中獲取行程 ID
  const schedules = useSelector((store) => store.schedule.schedules);
  console.log(schedules);
  const dispatch = useDispatch();
  const schedule = schedules.find((s) => s.scheduleId === scheduleId); // 根據 ID 獲取行程
  console.log(scheduleId, schedules);
  //   const startDate = new Date(schedule.time[0]);
  //   const endDate = new Date(schedule.time[1]);
  //   const startTime = `${startDate.getMonth() + 1}/${startDate.getDate()}`;
  //   const endTime = `${endDate.getMonth() + 1}/${endDate.getDate()}`;
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(schedule.landmarks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    dispatch(
      updateLandmarkOrder({
        scheduleName: schedule.scheduleName,
        newLandmarks: items,
      })
    );
  };
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="landmark">
        {(provided) => (
          <div
            className={styles.favoritebox}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {schedule.landmarks?.map((landmark, index) => (
              <Draggable
                key={landmark.id || `${landmark.name}-${index}`}
                draggableId={
                  landmark.id
                    ? landmark.id.toString()
                    : `${landmark.name}-${index}`
                }
                index={index}
              >
                {(provided) => (
                  <div
                    className={styles.placebox}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      cursor: "move",
                    }}
                  >
                    <img
                      src={landmark.image}
                      alt={landmark.name}
                      width="150px"
                    />
                    <h2 className={styles.name}>{landmark.name}</h2>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default ScheduleDetail;
