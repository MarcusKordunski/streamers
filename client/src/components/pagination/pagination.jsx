import { getVisiblePages } from "./get-visible-pages.js";
import { Button } from "../index.js";

import "./pagination.css";

function PageButton({ onChange, page, current = false }) {
  return (
    <Button
      value={page}
      className={`pagination__page-btn${current ? " active" : ""}`}
      onClick={() => onChange(page)}
    />
  );
}

export default function Pagination({ pages, page, onChange }) {
  if (pages === 1) {
    return null;
  }

  const nextPage = pages > page ? page + 1 : null;
  const prevPage = page > 1 ? page - 1 : null;

  return (
    <div className="pagination">
      {prevPage && (
        <div className="pagination__button-wrapper">
          <Button value="<" onClick={() => onChange(prevPage)} className={`pagination__page-btn`} />
        </div>
      )}

      <div className="pagination__button-wrapper">
        {getVisiblePages(page, pages, onChange).map(
          (pageData) => (
            <PageButton
              key={pageData.page}
              onChange={pageData.onChange}
              page={pageData.page}
              current={pageData.current}
            />
          )
        )}
      </div>

      {nextPage && (
        <div className="pagination__button-wrapper">
          <Button value=">" onClick={() => onChange(nextPage)} className={`pagination__page-btn`} />
        </div>
      )}
    </div>
  );
}
