import { useState, useEffect } from "react";
import cookies from "nookies";

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
  // console.log("TCL: Header -> router : ", router.query.country);

  // return a current value from select
  const handleChange = (e) => {
    setSelectedCountry(e.target.value); // set selected country to selected value

    // Navigate back to country
    // Push is method of router to redirect us back to a page with specfic country
    // router.push(`/${e.target.value}`); // Using only the url parameter will refresh the entire browser
    router.push(`/[country]`, `/${e.target.value}`); // use 2 parametes (the path of router and url for the browser) will applied refresh only on the clientside
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

  // Whenever country get selected a effect is going to be applied
  useEffect(() => {
    if (selectedCountry) {
      cookies.set(null, "defaultCountry", selectedCountry, {
        // key: defaultCountry value: selectedCountry
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    }
  }, [selectedCountry]);

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
