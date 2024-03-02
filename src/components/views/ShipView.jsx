import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../settings/api";
import Loading from "../loading/Loading";
import Error from "../error/Error";
import { Card } from "../../styledComponents/GlobalStyles";

const ShipView = () => {
  const [ship, setShip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`/ships/${shipId}`)
      .then((res) => {
        setShip(res.data);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();

  const { shipId } = useParams();

  const backBtn = () => {
    navigate(-1);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <Card>
          <h3>{ship.name}</h3>
          <img src={ship.image} className="ship-img" alt="" />
        </Card>
      )}
      <button onClick={backBtn}>Back to ships</button>
    </>
  );
};

export default ShipView;
