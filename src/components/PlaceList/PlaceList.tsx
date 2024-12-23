import PlaceItem from "../PlaceItem/PlaceItem";
import places from "../../json/place.json";
import styles from "./place.module.css";
import { Row, Col } from "antd";

// const obj = {
//     title:"日本",
//     detail:"古都風情"
// }

// const PlaceList=()=>{
//  return (
//     <div>
//   <PlaceItem  obj={obj} />

//     </div>
//  )
// }

const PlaceList = () => {
  return (
    <>
      <div className={styles.containerbox}>
        <h2 className={styles.title}>亞洲旅遊</h2>

        <Row gutter={[24, 32]} className={styles.contabox}>
          {places.map((place) => {
            return (
              <Col
                key={place.id}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 6 }}
              >
                <PlaceItem place={place} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};
export default PlaceList;
