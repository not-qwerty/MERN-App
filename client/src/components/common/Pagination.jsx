import React from "react";
import _ from "lodash";

export default function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;

  const pagesCount = itemsCount / pageSize;
  if (pagesCount < 2) return null;

  const pages = _.range(1, pagesCount + 1);

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((page) => (
            <li
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
              key={page}
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
