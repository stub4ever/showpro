import { useEffect } from "react";
import axios from "axios";

const CountryIndex = (props) => {
  console.log(`TCL: Home -> props ${props.shows}`);

  return (
    <>
      <h1>This is country index page</h1>
    </>
  );
};

// Initial as props
CountryIndex.getInitialProps = async () => {
  // fetch data via the server-side with axios not client side
  const response = await axios.get(
    "http://api.tvmaze.com/schedule?country=US&date=2014-12-01"
  );
  console.log(`TCL: Home -> response ${response.data}`); // return log inside terminal

  return {
    shows: response.data,
    test: "Testing",
  };
};

// /[country]/  => /US/ , /EN/
export default CountryIndex;
