import { useState, useEffect } from "react";
import api from "../../settings/api";
import Company from "../company/Company";
import Error from "../error/Error";
import Loading from "../loading/Loading";

const HomeView = () => {
  const [companyData, setCompanyData] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    api
      .get("company")
      .then((res) => setCompanyData(res.data))
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>HomeView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Company companyData={companyData} />
      )}
    </>
  );
};

export default HomeView;
