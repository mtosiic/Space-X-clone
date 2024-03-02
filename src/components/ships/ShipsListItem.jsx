import { Card } from "../../styledComponents/GlobalStyles";
import { Link } from "react-router-dom";
import "./style.css";

const ShipsListItem = ({ ship }) => {
  return (
    <Link to={`/ships/${ship.id}`}>
      <Card>
        <h3>{ship.name}</h3>
        <img src={ship.image} className="ship-img" alt="" />
      </Card>
    </Link>
  );
};

export default ShipsListItem;
