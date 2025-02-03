import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { Row, Col } from "antd";
import styles from "./layout.module.css";
import SearchBar from "../components/SearchBar";
const Layout = () => {
  // It returns an object with information about the current URL and can also be used to receive the state from a <Link/>.
  return (
    <>
      <Row className={styles.row}>
        <Col
          sm={{ span: 2 }}
          md={{ span: 2 }} /* 調整這裡的寬度 */
          lg={{ span: 4 }} /* 這裡維持不變 */
          className={styles.col_4}
        >
          <Header />
        </Col>
        <Col
          sm={{ span: 20 }}
          md={{ span: 20 }} /* 對應調整這裡的寬度 */
          lg={{ span: 20 }} /* 擴展內容區域 */
          className={styles.col_16}
        >
          <SearchBar />
          <Outlet />
        </Col>
      </Row>
    </>
  );
};

export default Layout;
