import Header from "../components/Header/Header";
import PlaceDetail, {type PlaceDetailProps} from "../components/PlaceDetail/PlaceDetail";
import { useParams } from "react-router-dom";
import places from "../json/place.json";

const Place = () => {
  const { placeId } = useParams();
  const place = places.find((x) => x.id === placeId);
  return (
    <div>
      <Header />
      <PlaceDetail place={place!} />
    </div>
  );
};

export default Place;
