import { Button, Modal, notification, Radio, Space } from "antd";

import styles from "./addToSchedule.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addScheduleItems } from "../../store/attraction";

export default function AddToSchedule({ landmark }) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
    console.log("scheduleItem:", scheduleItem);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const [value, setValue] = useState(1);
  const dispatch = useDispatch();
  const scheduleItem =
    useSelector((state) => state.schedule.scheduleItems) || [];
  const [selectedSchedule, setSelectedSchedule] = useState("");

  const onChange = (e) => {
    const newSchedule = e.target.value;
    setSelectedSchedule(newSchedule);
    setValue(e.target.value);
  };

  const handleOk = () => {
    if (scheduleItem.length > 0) {
      addSchedule();
    }
    notification.success({
      message: "成功新增景點!",
      description: `已添加 ${landmark.name} 到${selectedSchedule}中`,
      placement: "top",
    });
  };
  const addSchedule = () => {
    dispatch(
      addScheduleItems({
        scheduleName: selectedSchedule,
        landmark: {
          name: landmark.name,
          id: landmark.id,
          image: landmark.image,
          position: landmark.position,
          description: landmark.description,
          end_time: landmark.end_time,
          qty: 1,
        },
      })
    );
  };

  return (
    <div>
      <Button type="primary" className={styles.addbox} onClick={showModal}>
        加入行程
      </Button>

      <Modal
        title="加入行程"
        centered
        open={open}
        onOk={handleOk}
        okType="default"
        onCancel={handleCancel}
      >
        {scheduleItem.length === 0 ? (
          <div>請先建立行程!</div>
        ) : (
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              {scheduleItem.map((item, index) => (
                <Radio key={index} value={item.scheduleName}>
                  {item.scheduleName}
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        )}
      </Modal>
    </div>
  );
}
