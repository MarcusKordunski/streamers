import { StreamersListItem } from "../index.js";

import "./streamers-list.css";

export default function StreamersList({ streamers, handleVote }) {
  if (streamers !== undefined)
    return (
      <div className={`streamers-list`}>
        {streamers.map((streamer) => (
          <StreamersListItem key={streamer.id} {...streamer} handleVote={handleVote} />
        ))}
      </div>
    );
  return <div className={`streamers-list`} />;
}
