import ThumbnailStyles from "./styles";

const Thumbnail = ({
  imageUrl = "https://via.placeholder.com/210x295?text=?", // add default fallback
  caption,
}) => {
  return (
    <>
      <div className="thumbnail">
        <img className="thumbnail__image" src={imageUrl}></img>
        <h3 className="thumbnail__caption">{caption}</h3>

        <style jsx>{ThumbnailStyles}</style>
      </div>
    </>
  );
};

export default Thumbnail;
