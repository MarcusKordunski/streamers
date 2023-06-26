import { useState } from "react";

import { Page, StreamersList, Pagination } from "../components";
import data from "../data.json"

export default function Properties() {
  const [page, setPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [streamersData, setStreamersData] = useState(data.streamers);

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

  return (
    <Page title="Streamers" className="streamers" >
      <StreamersList streamers={chunks[page - 1]} />
      <Pagination
        pages={chunks.length}
        page={page}
        onChange={(pageNumber) => handleChangePage(pageNumber)}
      />
    </Page>
  );
}
