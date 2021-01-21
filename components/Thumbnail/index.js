import ThumbnailStyles from "./styles";

const Thumbnail = ({ imageUrl, caption }) => {
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
