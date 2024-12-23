import { ShrinkOutlined } from "@ant-design/icons";
import styles from "./site.module.css";

const SiteList = () => {
  const { title, navbox } = styles;
  return (
    <div className={navbox}>
      <ShrinkOutlined style={{ fontSize: "18px", color: "#fff" }} />
      <h1 className={title}>地標</h1>
    </div>
  );
};

export default SiteList;
