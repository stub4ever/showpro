import { useEffect } from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail";

const CountryIndex = ({ shows }) => {
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem; // use destructor to get show object property
      // return <li key={index}>{show.show.name}</li>;
      return (
        <li key={index}>
          <Thumbnail
            imageUrl={(show.image && show.image.medium) || undefined}
            caption={show.name}
          />
        </li>
      );
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
CountryIndex.getInitialProps = async (context) => {
  const country = context.query.country || "us"; // return the context path of query from [country]
  // Get country code => https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );
  return {
    shows: response.data,
    test: "Testing",
  };
};

// /[country]/  => /US/ , /EN/
export default CountryIndex;
