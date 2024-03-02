import { useEffect, useContext } from "react";
import api from "../../settings/api";
import ShipsList from "../ships/ShipsList";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { ShipsContext } from "../../context/ShipsContext";

const ShipsView = () => {
  const { state, dispatch } = useContext(ShipsContext);
  const { ships, loading, error } = state;

  useEffect(() => {
    dispatch({ type: "FETCH_SHIPS_REQUEST" });
    api
      .get("/ships")
      .then((res) => {
        dispatch({
          type: "FETCH_SHIPS_SUCCESS",
          payload: res.data.slice(4, 14),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_SHIPS_FAILURE",
          payload: error.response,
        });
      });
  }, []);

  return (
    <>
      <h1>ShipsView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <ShipsList ships={ships} />
      )}
    </>
  );
};

export default ShipsView;
