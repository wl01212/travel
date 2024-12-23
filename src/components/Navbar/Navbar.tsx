import {
  HeartOutlined,
  ShrinkOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.css";

// 定义 Props 类型
interface NavBarProps {
  isShrink: boolean; // isShrink 是一个布尔值
}

const NavBar = ({ isShrink }: NavBarProps) => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navbox}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.navboxActive : styles.navbar
          }
        >
          <div className={styles.navItme}>
            <ShrinkOutlined className={styles.icon} />
            {!isShrink && <div className={styles.title}>地標</div>}
          </div>
        </NavLink>
      </div>

      <div className={styles.navbox}>
        <NavLink
          to="/favorite"
          className={({ isActive }) =>
            isActive ? styles.navboxActive : styles.navbar
          }
        >
          <div className={styles.navItme}>
            <HeartOutlined className={styles.icon} />
            {!isShrink && <h1 className={styles.title}>我的最愛</h1>}
          </div>
        </NavLink>
      </div>
      <div className={styles.navbox}>
        <NavLink
          to="/schedule"
          className={({ isActive }) =>
            isActive ? styles.navboxActive : styles.navbar
          }
        >
          <div className={styles.navItme}>
            <ScheduleOutlined className={styles.icon} />
            {!isShrink && <h1 className={styles.title}>行程</h1>}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
