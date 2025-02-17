import { useNavigate } from "react-router-dom";
import { Row, Col, AutoComplete, Input } from "antd";
import landmarks from "../../json/place.json";
import styles from "./searchBar.module.css";
import { useState } from "react";
export default function SearchBar() {
  const [options, setOptions] = useState([]); // 搜尋選項
  const navigate = useNavigate();

  const onSelect = (value, option) => {
    navigate(`/places/${option.id}`);
  };

  const handleSearch = (value) => {
    const searchResults = landmarks
      .filter((landmark) =>
        landmark.name.toLowerCase().includes(value.toLowerCase())
      )
      .map((landmark) => ({
        value: landmark.name,
        id: landmark.id, // 加入 ID 以便搜尋後導覽
      }));

    setOptions(searchResults);
  };
  const onSearch = (value) => {
    const selectedPlace = landmarks.find(
      (landmark) => landmark.name.toLowerCase() === value.toLowerCase()
    );
    if (selectedPlace) {
      navigate(`/places/${selectedPlace.id}`);
    }
  };
  return (
    <Row justify="center" className={styles.searchRow}>
      <Col span={18}>
        <AutoComplete
          options={options}
          onSearch={handleSearch}
          onSelect={onSelect}
          style={{ width: "65%" }}
        >
          <Input.Search
            placeholder="搜尋景點"
            enterButton
            onSearch={onSearch} // 處理 Enter 鍵觸發導航
          />
        </AutoComplete>
      </Col>
    </Row>
  );
}
