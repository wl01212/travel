import { FloatButton } from "antd";
import styles from "./Navigationbutton.module.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/map") {
    return null;
  }
  const handleCilck = () => {
    navigate("/map");
  };

  return (
    <FloatButton
      className={styles.floatButton} //變數是個容器 ，容器裡面裝質
      icon={<EnvironmentOutlined style={{ fontSize: "20px" }} />} //質不一定需要存放在容器 ，可以直接被使用  // style={{fontSize: '20px'}}  第一個括號是react的使用放法 裡面存放變數 第二個是物件
      description="Map"
      type="text"
      onClick={handleCilck}
      shape="square" //新規則要補這個
    />
  );
};

export default NavigationButton;
