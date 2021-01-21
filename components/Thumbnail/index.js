const Thumbnail = ({ imageUrl, caption }) => {
  return (
    <>
      <div className="thumbnail">
        <img className="thumbnail__image" src={imageUrl}></img>
        <h3 className="thumbnail__title">{caption}</h3>
      </div>
    </>
  );
};

export default Thumbnail;
