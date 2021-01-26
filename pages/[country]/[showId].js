import axios from "axios";
import parse from "html-react-parser";
import Cast from "../../components/Cast";

const ShowDetails = ({ show }) => {
  const { name, image, summary, _embedded } = show;

  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image && image.original})` }}
      ></div>
      <h1>{name}</h1>
      {parse(summary)} {/* Parse html */}
      <Cast cast={_embedded.cast} />
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

  try {
    const response = await axios.get(
      `https://api.tvmaze.com/shows/1?embed=cast`
    );

    return {
      props: {
        show: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.error,
      },
    };
  }
};

// /[country]/[id]  => /US/32332 , /EN/32344
export default ShowDetails;
