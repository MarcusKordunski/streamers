import "./streamers-list-item.css";
import { Button } from "../index"
import { Link } from "react-router-dom";

export default function StreamersListItem({
  id,
  name,
  platform,
  upvotes,
  downvotes,
  smallCard
}) {

  return (
    <div className={`streamer-list-item ${smallCard ? "small" : ""}`}>

      <div className="streamer-list-item__top-content">
        {!smallCard && <Link to={`/streamer/${id}`}>
          <Button className="streamer-list-item__details" value="..." />
        </Link>}
        <img className={`streamer-list-item__image ${smallCard ? "small" : ""}`} src="https://staticc.sportskeeda.com/editor/2023/02/8d8d8-16775633289121.png" alt="Asmongold" />
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
