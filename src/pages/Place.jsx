import PlaceDetail from "../components/PlaceDetail/PlaceDetail";
import { useParams } from "react-router-dom";
import places from "../data/place.json";

const Place = () => {
  const { placeId } = useParams();
  const place = places.find((x) => x.id === placeId);
  return (
    <div>
      <PlaceDetail place={place} />
    </div>
  );
};

export default Place;
