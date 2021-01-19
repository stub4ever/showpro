import { useEffect } from "react";
import axios from "axios";

const CountryIndex = () => {
  useEffect(() => {
    axios
      .get("http://api.tvmaze.com/schedule?country=US&date=2014-12-01") // fetch data via the browser(Client) with axios not service side
      .then((response) => console.log(response.data));
  }, []); // Only when the component is mounting for the first time

  return (
    <>
      <h1>This is country index page</h1>
    </>
  );
};

// /[country]/  => /US/ , /EN/
export default CountryIndex;
