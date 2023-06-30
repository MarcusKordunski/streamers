import { StreamersListItem } from "..";
import "./streamer-info.css";

export default function StreamerInfo({
  id,
  name,
  description,
  platform,
  upvotes,
  downvotes,
  handleVote
}) {
  return (
    <div className="streamer-info">
      <StreamersListItem smallCard={true} id={id} name={name} platform={platform} upvotes={upvotes} downvotes={downvotes} handleVote={handleVote} />
      <p className="streamer-info__right-content" style={{ whiteSpace: "pre-line" }}>{name !== undefined && description !== undefined && platform !== undefined ? description : "Error 404 \n There is no such streamer in our database 🤔"}</p>
    </div >
  );
}
