import { Card } from "../../styledComponents/GlobalStyles";
import { Link } from "react-router-dom";

const RocketsListItem = ({ rocket }) => {
  return (
    <Link to={`/rockets/${rocket.id}`}>
      <Card>
        <h3>{rocket.name}</h3>
        <img src={rocket.flickr_images[1]} alt="" />
      </Card>
    </Link>
  );
};

export default RocketsListItem;
