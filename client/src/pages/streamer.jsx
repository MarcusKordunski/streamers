import { useParams } from "react-router-dom";
import data from "../data.json"

import { Page, StreamerInfo } from "../components";

export default function Streamer() {
  const { id } = useParams();
  const streamerData = data.streamers.find((streamer) => streamer.id === id);
  return (
    <Page title={streamerData.name} className="streamer">
      <StreamerInfo {...streamerData} />
    </Page>
  );
}
