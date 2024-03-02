const Company = ({ companyData }) => {
  console.log(companyData);
  return (
    <div>
      <div>
        <h1>{companyData.name}</h1>
        <p>
          Founder: <i>{companyData.founder}</i>
        </p>
        <p>
          Employees: <i>{companyData.employees}</i>
        </p>
        <div>
          {Object.keys(companyData.headquarters).map((key) => (
            <div key={key}>
              {key}: {companyData.headquarters[key]}
            </div>
          ))}
        </div>
        <div>
          {Object.keys(companyData.links).map((key) => (
            <div key={key}>
              <a href={companyData.links[key]}>{companyData.links[key]}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Company;
