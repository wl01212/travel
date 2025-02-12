import styles from "./map.module.css";
import { Row, Col } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // 引入 Leaflet 的樣式
import landmarks from "../../json/place.json";
import AddToFavorite from "../AddToFavorite";
import CreateScheduleButton from "../ScheduleButton/CreateScheduleButton";
import AddToSchedule from "../AddToSchedule";

export default function MapItem() {
  const center = [36.23541690015412, 137.97220383903155];
  return (
    <div className={styles.fullScreen}>
      <Row className={styles.mapContainer}>
        <Col span={24} className={styles.mapCol}>
          <MapContainer center={center} zoom={7} className={styles.map}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy;
                            <a href="https://www.openstreetmap.org/copyright">OpenStreetMap
                            </a> contributors'
            />
            <Marker position={center}>
              <Popup>地圖中心</Popup>
            </Marker>
            {/* 從 landmarks 中匯入的 Marker */}
            {landmarks.map((landmark) => (
              <Marker key={landmark.id} position={landmark.position}>
                <Popup className={styles.popup}>
                  <div className={styles.landmarkName}>{landmark.name}</div>
                  <img src={landmark.image} className={styles.img} />
                  <div className={styles.buttonContainer}>
                    <AddToFavorite landmark={landmark} />
                    <AddToSchedule landmark={landmark} />
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Col>
      </Row>
      <CreateScheduleButton />
    </div>
  );
}
