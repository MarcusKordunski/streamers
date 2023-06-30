import { Button } from "../index.js";

import "./modal.css";

export default function Modal({ toggleModal, isOpenModal, children }) {
  return (
    <aside
      className={isOpenModal ? "modal active" : "modal"}
    >
      <div className="modal__modal-wrapper">
        <Button
          className="modal__exit-button"
          value="╳"
          onClick={toggleModal}
        />
        {children}
      </div>
    </aside>
  );
}
