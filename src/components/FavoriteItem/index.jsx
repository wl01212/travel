import { useDispatch } from "react-redux";
import { favoriteActions } from "/src/store/favorite";
import styles from "./favoriteItem.module.css";
import { Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons";


export default function FavoriteItem({place}) {
    const dispatch = useDispatch();
    const handleRemove =() =>{
      dispatch(favoriteActions.removeFavorite(place));
    }
    return (
      <>
        <div className={styles.favoritebox}>
          <div className={styles.placebox}>
            <img src={place.image} alt={place.image} width={"150px"} />
            <h2 className={styles.name}>{place.name}</h2>
          </div>
          <div>
            {/* <Button onClick={showPromiseConfirm}>With promise</Button> */}
            <Button
              type="text"
              onClick={handleRemove}
              icon={<DeleteTwoTone style={{ fontSize: "30px" }} />}
              danger
            />
          </div>
        </div>
      </>
    );
  }