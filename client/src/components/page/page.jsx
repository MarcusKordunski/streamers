import { Header } from "../index.js";

import "./page.css";

export default function Page({ title, className, children, handleAddStreamer, isOpenModal, toggleModal }) {
  return (
    <>
      <Header title={title} handleAddStreamer={handleAddStreamer} isOpenModal={isOpenModal} toggleModal={toggleModal} />
      <main className={`main ${className}`}>{children}</main>
    </>
  );
}
