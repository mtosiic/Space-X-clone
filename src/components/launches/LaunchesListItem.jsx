import { Card } from "../../styledComponents/GlobalStyles";
import { Link } from "react-router-dom";

const LaunchesListItem = ({ launch }) => {
  return (
    <Link to={`/launches/${launch.id}`}>
      <Card>
        <h3>{launch.name}</h3>
        <img src={launch.links.patch.small} alt="" />
        <br />
        <span>{launch.details}</span>
      </Card>
    </Link>
  );
};

export default LaunchesListItem;
