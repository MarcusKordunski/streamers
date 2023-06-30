import { useState, useEffect } from "react";
import { useFetch } from "../hooks";

import { Page, StreamersList, Pagination, LoadingSpinner } from "../components";

export default function Streamers() {
  const [streamers, isStreamerLoading, fetchStreamerError] = useFetch({
    url: "http://localhost:3500/api/streamers/",
  });
  const [page, setPage] = useState(1);
  const [streamersData, setStreamersData] = useState([]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  useEffect(() => {
    if (streamers) {
      setStreamersData(streamers);
    }
  }, [streamers]);

  async function handleAddStreamer(streamerData, toggleModal) {
    try {
      const newStreamerData = { ...streamerData, upvotes: 0, downvotes: 0, id: streamersData[streamersData.length - 1].id + 1 }
      const response = await fetch("http://localhost:3500/api/streamers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(streamerData),
      });

      setStreamersData((prevData) =>
        [
          ...prevData,
          newStreamerData
        ]
      )

      return await response.json();
    } catch (err) {
      throw err;
    }
  }

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

  const handleChangePage = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  function chunkData() {
    const chunkSize = 6;
    return streamersData.reduce((acc, item, index) => {
      const chunkIndex = Math.floor(index / chunkSize);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(item);

      return acc;
    }, []);
  }

  const chunks = chunkData();

  if (fetchStreamerError) {
    console.error(fetchStreamerError)
  }
  if (isStreamerLoading) return <LoadingSpinner />;
  return (
    <Page title="Streamers" className="streamers" handleAddStreamer={handleAddStreamer} isOpenModal={isOpenModal} toggleModal={toggleModal} setIsOpenModal={setIsOpenModal}>
      <StreamersList streamers={chunks[page - 1]} handleVote={handleVote} />
      <Pagination
        pages={chunks.length}
        page={page}
        onChange={(pageNumber) => handleChangePage(pageNumber)}
      />
    </Page>
  );
}
