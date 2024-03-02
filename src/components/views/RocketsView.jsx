import { useEffect, useContext } from "react";
import api from "../../settings/api";
import RocketsList from "../rockets/RocketsList";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { RocketsContext } from "../../context/RocketsContext";

const RocketsView = () => {
  const { state, dispatch } = useContext(RocketsContext);
  const { rockets, loading, error } = state;

  useEffect(() => {
    dispatch({ type: "FETCH_ROCKETS_REQUEST" });
    api
      .get("/rockets")
      .then((res) => {
        dispatch({
          type: "FETCH_ROCKETS_SUCCESS",
          payload: res.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_ROCKETS_FAILURE",
          payload: error.response,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>RocketsView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <RocketsList rockets={rockets} />
      )}
    </>
  );
};

export default RocketsView;
