import { useState } from "react";
import { Modal, Form, Input, DatePicker, notification } from "antd";
import { useDispatch } from "react-redux";
import { addScheduleItems } from "/src/store/schedule";
import { v4 } from "uuid";

export default function ScheduleModal({ isOpen, toggleModal }) {
  const { RangePicker } = DatePicker;
  const [time, setTime] = useState("");
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const timeChange = (date, dateString) => {
    setTime(dateString);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(
          addScheduleItems({
            scheduleId: v4(),
            scheduleName: values["schedule name:"],
            time: time,
          })
        );
        console.log("Form values:", values);
        console.log("Form time:", time);
        console.log("Action dispatched");
        notification.success({
          message: "已新增行程!",
          description: `已添加 ${values["schedule name:"]} 到行程中`,
          placement: "top",
        });
        toggleModal();
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
        console.log("Failed time:", time);
        console.log("Validate Failed:", info);
      });
  };

  const handleCancel = () => {
    toggleModal();
    form.resetFields();
  };

  return (
    <div>
      <Modal
        title="新增行程"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="date"
            label="日期"
            rules={[{ required: true, message: "請選擇日期" }]}
          >
            <RangePicker onChange={timeChange} />
          </Form.Item>
          <Form.Item
            name="schedule name:"
            label="行程名稱"
            rules={[{ required: true, message: "請輸入行程名稱" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
