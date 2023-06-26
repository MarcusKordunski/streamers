import { StreamersListItem } from "../index.js";

import "./streamers-list.css";

export default function StreamersList({ streamers }) {
  if (streamers !== undefined)
    return (
      <div className={`streamers-list`}>
        {streamers.map((streamer) => (
          <StreamersListItem key={streamer.id} {...streamer} />
        ))}
      </div>
    );
  return <div className={`streamers-list`}>There are no streamers on the list at the moment :^(</div>;
}
