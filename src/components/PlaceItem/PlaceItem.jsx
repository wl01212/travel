//import styles from "./place.module.css";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";

// const PlaceItem=({obj}) =>{ //多了{}
//     console.log(obj);//檢查用 可省略
//     return(//當有兩個html時，要包一個</>變成一整個
//       <>
//       <h1>
//         {obj.title}

//       </h1>

//      <p>
//          {obj.detail}
//       </p>
//       </>
//     );

//  }

const PlaceItem = ({ place }) => {
  return (
    <>
      <Row>
        <Col>
          <Link to={`/places/id/${place.id}`}>
            <img src={place.image} alt="" width="100%" />
          </Link>
          <p>{place.name}</p>
        </Col>
      </Row>
    </>
  );
};

export default PlaceItem;
