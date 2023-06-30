import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Streamers, Streamer } from "./pages";

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Streamers />} />
        <Route path="/:id" element={<Streamer />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

async function main() {
  const root = document.createElement("div");
  document.querySelector("body").appendChild(root);
  ReactDOM.createRoot(root).render(<App />);
}

main();