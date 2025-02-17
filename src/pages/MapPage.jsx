//pages/Map.jsx
import MapItem from "../components/MapItem/MapItem";
import styles from "./map.module.css";

export default function Map() {
  return (
    <>
      <div className={styles.container}>
        <MapItem />
      </div>
    </>
  );
}
