import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "../index"

import "./header.css";

export default function Header({ title }) {
  useEffect(() => {
    window.document.title = title;
  }, [title]);
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__content-left">
          <Link to="/" className="header__link">
            <h2 className="header__logo">Logo</h2>
          </Link>
          <h1 className="header__title">{title}</h1>
        </div>
        <div className="header__content-right">
          {title === "Streamers" && <Button value="Add streamer" className="header__add-streamer-btn" />}
        </div>
      </div>
    </header >
  );
}
