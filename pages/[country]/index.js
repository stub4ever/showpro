import { useEffect } from "react";
import axios from "axios";

const CountryIndex = ({ shows }) => {
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem; // use destructor to get show object property
      // return <li key={index}>{show.show.name}</li>;
      return <li key={index}>{show.name}</li>;
    });
  };

  return (
    <>
      <ul className="tv-shows">{renderShows()}</ul>
    </>
  );
};

// Initial as props => improve initial loading
// Execute before your component renders before the page
// So it means that on the server-side whenever what happening
// we don't have any access to client-side with a browser like hooks like useffect, router
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
