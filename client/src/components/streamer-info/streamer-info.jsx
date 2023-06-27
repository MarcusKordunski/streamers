import { StreamersListItem } from "..";
import "./streamer-info.css";

export default function StreamerInfo({
  id,
  name,
  description,
  platform,
  upvotes,
  downvotes
}) {
  return (
    <div className="streamer-info">
      <StreamersListItem smallCard={true} id={id} name={name} platform={platform} upvotes={upvotes} downvotes={downvotes} />
      <p className="streamer-info__right-content" style={{ whiteSpace: "pre-line" }}>{description}</p>
    </div >
  );
}
