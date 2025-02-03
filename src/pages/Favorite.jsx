import FavoriteList from "../components/FavoriteList/FavoriteList";
import styles from "./favorite.module.css";

const Favorite = () => {
  return (
    <div className={styles.container}>
      <FavoriteList />
    </div>
  );
};

export default Favorite;
