import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../settings/api";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { Card } from "../../styledComponents/GlobalStyles";

const LaunchView = () => {
  const [launch, setLaunch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    api
      .get(`/launches/${launchId}`)
      .then((res) => {
        setLaunch(res.data);
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

  const { launchId } = useParams();
  console.log(launchId);

  console.log(launch);

  const backBtn = () => {
    navigate(-1);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Card>
          <h3>{launch.name}</h3>
          <img src={launch.links.patch.small} alt="" />
          <br />
          <span>{launch.details}</span>
        </Card>
      )}
      <button onClick={backBtn}>Back to launches</button>
    </>
  );
};

export default LaunchView;
