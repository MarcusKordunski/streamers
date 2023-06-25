import { Header } from "../index.js";

import "./page.css";

export default function Page({ title, className, children }) {
  return (
    <>
      <Header title={title} />
      <main className={`main ${className}`}>{children}</main>
    </>
  );
}
