import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks";

import { Page, StreamerInfo, LoadingSpinner } from "../components";

export default function Streamer() {
  const { id } = useParams();
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  async function handleAddStreamer(streamerData, toggleModal) {
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
    <Page className="streamer" title={streamer && streamer.name} handleAddStreamer={handleAddStreamer} isOpenModal={isOpenModal} toggleModal={toggleModal}>
      <StreamerInfo {...streamer} handleVote={handleVote} />
    </Page >
  );
}
