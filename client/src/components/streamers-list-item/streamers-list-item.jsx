import "./streamers-list-item.css";
import { useState } from "react";
import { Button } from "../index"
import { Link } from "react-router-dom";
import { addVote } from "./add-vote"

export default function StreamersListItem({
  id,
  name,
  platform,
  upvotes,
  downvotes,
  smallCard,
  handleVote
}) {
  const [votes, setVotes] = useState({ upvotes: Number(upvotes), downvotes: Number(downvotes) })
  return (
    <div className={`streamer-list-item ${smallCard ? "small" : ""}`}>

      <div className="streamer-list-item__top-content">
        {!smallCard && <Link to={`/${id}`}>
          <Button className="streamer-list-item__details" value="..." />
        </Link>}
        <img className={`streamer-list-item__image ${smallCard ? "small" : ""}`} src="https://staticc.sportskeeda.com/editor/2023/02/8d8d8-16775633289121.png" alt="Asmongold" />
        <h2>{name}</h2>
        <h3 className={`streamer-list-item__platform ${smallCard ? "small" : ""}`}>{platform}</h3>
      </div>

      <div className="streamer-list-item__bottom-content">
        <p className="streamer-list-item__counter upvote">{votes.upvotes}</p>
        <p className="streamer-list-item__counter downvote">{votes.downvotes}</p>
        <Button onClick={() => { addVote("upvote", id, votes, setVotes, handleVote) }} className={votes.upvotes >= 1 ? "streamer-list-item__button upvote active" : "streamer-list-item__button upvote"} value="Upvote" />
        <Button onClick={() => { addVote("downvote", id, votes, setVotes, handleVote) }} className={votes.downvotes >= 1 ? "streamer-list-item__button downvote active" : "streamer-list-item__button downvote"} value="Downvote" />
      </div>

    </div >
  );
}
