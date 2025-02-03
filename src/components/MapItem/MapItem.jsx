import styles from "./map.module.css";
import { Row, Col } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // 引入 Leaflet 的樣式

export default function MapItem() {
  return (
    <div className={styles.fullScreen}>
      {/* 地圖區域 */}
      <Row className={styles.mapContainer}>
        <Col span={24} className={styles.mapCol}>
          <MapContainer
            center={[25.033, 121.5654]}
            zoom={13}
            className={styles.map}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; 
                            <a href="https://www.openstreetmap.org/copyright">
                                OpenStreetMap
                            </a> contributors'
            />
            <Marker position={[25.033, 121.5654]}>
              <Popup>這是台北 101 的位置。</Popup>
            </Marker>
          </MapContainer>
        </Col>
      </Row>
    </div>
  );
}
