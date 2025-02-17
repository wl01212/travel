import styles from "./header.module.css";
import logo from "../../assets/travel.png";
import { Divider } from "antd";
import NavBar from "../Navbar/Navbar";
import { useState } from "react";
//import ScheduleList from "../../components/ScheduleList/ScheduleList";
//import FavoriteList from"../../components/FavoriteList/FavoriteList"
//import SiteList from "../../components/Site/SiteList";

const Header = () => {
  const [isShrink, setIsShrink] = useState(true);
  return (
    <div
      className={`${styles.headContainer} ${
        isShrink ? styles.shrink : styles.expand
      }`}
      onMouseEnter={() => setIsShrink(false)}
      onMouseLeave={() => setIsShrink(true)}
    >
      <div className={styles.logoBox}>
        <img src={logo} alt="logo" className={styles.logo} />
        {!isShrink && <h1 className={styles.title}>Traver</h1>}
        {!isShrink && <Divider className={styles.divider} />}
      </div>

      {/* <SiteList/>
        <FavoriteList/>
    <ScheduleList/>  */}
      <NavBar isShrink={isShrink} />
    </div>
  );
};
export default Header;
