import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../settings/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { Card } from "../../styledComponents/GlobalStyles";

const RocketView = () => {
  const [rocket, setRocket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get(`rockets/${rocketId}`)
      .then((res) => {
        setRocket(res.data);
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

  const { rocketId } = useParams();

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
          <h3>{rocket.name}</h3>
          <img src={rocket.flickr_images[1]} alt="" />
        </Card>
      )}
      <button onClick={backBtn}>Back to rockets</button>
    </>
  );
};

export default RocketView;
