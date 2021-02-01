import axios from "axios";
import parse from "html-react-parser";
import Cast from "../../components/Cast";
import Error from "next/error"; // error handeling by next
import CustomError from "../_error";

const ShowDetails = ({ show = {}, statusCode }) => {
  const { name, image, summary, _embedded } = show;

  if (statusCode) {
    // return <h1>There was an error</h1>;

    // Default error handling
    //return <Error statusCode={statusCode} title="Oopsie! Error"></Error>;

    // Custom handling
    return <CustomError statusCode={statusCode}></CustomError>;
  }

  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image && image.original})` }}
      ></div>
      <h1>{name}</h1>
      {parse(summary)} {/* Parse html */}
      {/* Show only if it has Cast item */}
      {_embedded.cast.length > 0 && <Cast cast={_embedded.cast} />}
      <style jsx>{`
        .show-details__poster {
          height: 200px;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

// the latest version of Next.js and now the documentation recommends us to use getServerSideProps instead of getInitialProps.
export const getServerSideProps = async ({ query }) => {
  const { showId } = query;
  // console.log(query) // return country and showId

  // const response = await axios.get(
  //   `https://api.tvmaze.com/shows/${showId}?embed=cast`
  // );

  // return {
  //   props: {
  //     show: response.data,
  //   },
  // };

  try {
    const response = await axios.get(
      `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );

    return {
      props: {
        show: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        statusCode: error.response ? error.response.status : 500, // if not response error status return 500 error
      },
    };
  }
};

// /[country]/[id]  => /US/32332 , /EN/32344
export default ShowDetails;
