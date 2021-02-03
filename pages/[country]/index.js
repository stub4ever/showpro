import { useEffect } from "react";
import axios from "axios";
import Thumbnail from "../../components/Thumbnail";
import Error from "next/error"; // error handeling by next
import CustomError from "../_error";
import cookies from "nookies";

const CountryIndex = ({ shows, country, statusCode }) => {
  if (statusCode) {
    // return <h1>There was an error</h1>;

    // Default error handling
    //return <Error statusCode={statusCode} title="Oopsie! Error"></Error>;

    // Custom handling
    return <CustomError statusCode={statusCode}></CustomError>;
  }

  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem; // use destructor to get show object property
      // return <li key={index}>{show.show.name}</li>;
      return (
        <li key={index}>
          <Thumbnail
            href="/[country]/[showId]"
            // as="/us/5617"
            as={`/${country}/${show.id}`}
            imageUrl={(show.image && show.image.medium) || undefined} // if the image is null and ...
            caption={show.name}
          />
        </li>
      );
    });
  };

  return (
    <>
      <ul className="tvshows-grid">
        {renderShows()}

        <style jsx>{`
          .tvshows-grid {
            list-style: none;
            padding-left: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
        `}</style>
      </ul>
    </>
  );
};

// Initial as props => improve initial loading
// Execute before your component renders before the page
// So it means that on the server-side whenever what happening
// we don't have any access to client-side with a browser like hooks like useffect, router
// CountryIndex.getInitialProps = async (context) => {
//   const country = context.query.country || "us"; // return the context path of query from [country]
//   // Get country code => https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
//   const response = await axios.get(
//     `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
//   );
//   return {
//     shows: response.data,
//     country, // add dynamic country path
//     test: "Testing",
//   };
// };

// the latest version of Next.js and now the documentation recommends us to use getServerSideProps instead of getInitialProps.
export const getServerSideProps = async (context) => {
  const myAppCookies = cookies.get(context);

  try {
    const { defaultCountry } = cookies.get(context);
    const country = context.query.country || defaultCountry || "us"; // return the context path of query from [country]
    // Get country code => https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes
    const response = await axios.get(
      `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );
    return {
      props: {
        shows: response.data,
        country, // add dynamic country path
        test: "Testing",
      },
    };
  } catch (error) {
    return {
      props: {
        statusCode: error.response ? error.response.status : 500,
      },
    };
  }
};

// /[country]/  => /US/ , /EN/
export default CountryIndex;
