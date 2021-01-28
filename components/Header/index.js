const countries = [
  {
    label: "us",
    name: "United States",
  },
  {
    label: "br",
    name: "Brazil",
  },
];

const Header = () => {
  // return a current value from select
  const handleChange = (e) => {
    console.log("selected country : ", e.target.value);
  };

  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <option key={country.label} value={country.label}>
          {country.name}
        </option>
      );
    });
  };

  return (
    <div className="header">
      <select onChange={handleChange}>
        {/* <option value="us">United states</option> */}
        {/* <option value="br">Brazil</option> */}
        {renderCountries()}
      </select>

      <style jsx>{`
        .header {
          padding: 20px;
          background-color: #333;
          color: #fff;
          text-align: center;
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
        }
        .header > :global(a) {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Header;
