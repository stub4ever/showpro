import Link from "next/link";
import ThumbnailStyles from "./styles";

const Thumbnail = ({
  imageUrl = "https://via.placeholder.com/210x295?text=?", // add default fallback
  caption,
  href = "", // default empty string
  as = "", // default empty string
}) => {
  return (
    <>
      <div className="thumbnail">
        {/* href="/[country]/[id]" as="/us/5617" */}
        {/* Currently the linked page reload completely, you can update the client-side without complete fetch on the server-side */}
        <Link href={href} as={as}>
          <a>
            <img className="thumbnail__image" src={imageUrl}></img>
            <h3 className="thumbnail__caption">{caption}</h3>
          </a>
        </Link>

        <style jsx>{ThumbnailStyles}</style>
      </div>
    </>
  );
};

export default Thumbnail;
