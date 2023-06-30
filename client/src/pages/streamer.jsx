import { useParams } from "react-router-dom";
import { useFetch } from "../hooks";

import { Page, StreamerInfo, LoadingSpinner } from "../components";

export default function Streamer() {
  const { id } = useParams();
  const [streamer, isStreamerLoading, fetchStreamerError] = useFetch({ url: `http://localhost:3500/api/streamers/${id}` });

  async function handleVote(vote, id) {
    try {
      const response = await fetch(`http://localhost:3500/api/streamers/${id}/vote`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(vote),
      });

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  async function handleAddStreamer(streamerData) {
    try {
      const response = await fetch("http://localhost:3500/api/streamers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(streamerData),
      });

      window.location.reload();

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

  if (fetchStreamerError) {
    console.error(fetchStreamerError)
  }
  if (isStreamerLoading) return <LoadingSpinner />;
  return (
    <Page className="streamer" title={streamer && streamer.name} handleAddStreamer={handleAddStreamer}>
      <StreamerInfo {...streamer} handleVote={handleVote} />
    </Page >
  );
}
