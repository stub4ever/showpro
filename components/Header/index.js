import { useState } from "react";

// Get current selected country from the URL we need to include useRouter
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState(router.query.country); // Init by default the query path of the current country page
  // console.log("TCL: Header -> router : ", router);
  console.log("TCL: Header -> router : ", router.query.country);

  // return a current value from select
  const handleChange = (e) => {
    setSelectedCountry(e.target.value); // set selected country to selected value
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
      {/* Set value default to us */}
      {/* <select value="us" onChange={handleChange}> */}
      {/* Return by default the value path of the current page -> need to fix select input isn't  changable */}
      {/* <select value={router.query.country} onChange={handleChange}> */}
      <select value={selectedCountry} onChange={handleChange}>
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
