import { ConfigProvider, FloatButton, Button } from "antd";
import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import ScheduleModal from "../ScheduleModal";
import styles from "./createSchedule.module.css";
export default function CreateScheduleButton() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ConfigProvider>
        <div>
          <nav onClick={toggleOpen}>
            <FloatButton.Group>
              <Button icon={<PlusOutlined />} className={styles.button} />
            </FloatButton.Group>
          </nav>
          <ScheduleModal isOpen={isOpen} toggleModal={toggleOpen} />
        </div>
      </ConfigProvider>
    </>
  );
}
