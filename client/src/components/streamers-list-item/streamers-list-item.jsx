import "./streamers-list-item.css";
import { Button } from "../index"

export default function StreamersListItem({
  id,
  name,
  platform,
  description,
  upvotes,
  downvotes
}) {

  return (
    <div className={"streamer-list-item"}>
      <div className="streamer-list-item__top-content">
        <img className="streamer-list-item__image" src="https://staticc.sportskeeda.com/editor/2023/02/8d8d8-16775633289121.png" alt="Asmongold" />
        <h2>{name}</h2>
        <h3>{platform}</h3>
      </div>
      <div className="streamer-list-item__bottom-content">
        <Button className="streamer-list-item__button upvote" value="Upvote" />
        <Button className="streamer-list-item__button downvote" value="Downvote" />
      </div>
    </div>
  );
}
