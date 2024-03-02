import { useState, useEffect, useContext } from "react";
import api from "../../settings/api";
import LaunchesList from "../launches/LaunchesList";
import Error from "../error/Error";
import Loading from "../loading/Loading";
import { LaunchesContext } from "../../context/LaunchesContext";

const LaunchesView = () => {
  const { state, dispatch } = useContext(LaunchesContext);
  const { launches, loading, error } = state;

  useEffect(() => {
    dispatch({ type: "FETCH_LAUNCHES_REQUEST" });
    api
      .get("/launches")
      .then((res) => {
        dispatch({
          type: "FETCH_LAUNCHES_SUCCESS",
          payload: res.data.slice(0, 10),
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_LAUNCHES_FAILURE",
          payload: error.response,
        });
      });
  }, []);
  return (
    <>
      <h1>LaunchesView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <LaunchesList launches={launches} />
      )}
    </>
  );
};

export default LaunchesView;
