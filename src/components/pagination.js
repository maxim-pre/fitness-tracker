import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, setCurrentPage, itemsCount, pageSize }) => {
  const maxPage = Math.ceil(itemsCount / pageSize);
  let pages = [];
  if (currentPage === 1) {
    for (let i = currentPage; i < currentPage + pageSize; i++) {
      if (i <= maxPage) pages.push(i);
    }
  } else if (currentPage === maxPage) {
    for (let i = currentPage - (pageSize - 1); i < currentPage + 1; i++) {
      if (i >= 1) pages.push(i);
    }
  } else {
    pages = [currentPage - 1, currentPage, currentPage + 1];
  }
  if (maxPage <= 1) {
    return null;
  }
  return (
    <div className="flex bg-white rounded">
      <button
        className="h-10 border-2 border-blue-700 w-10 border-r-0 rounded-l-lg"
        onClick={() => {
          currentPage > 1
            ? setCurrentPage(currentPage - 1)
            : setCurrentPage(currentPage);
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {pages.map((page, index) => {
        return (
          <button
            className={`h-10 border-2 border-blue-700 w-10 border-r-0 font-bold ${
              page === currentPage ? "bg-blue-700 text-white" : ""
            } `}
            onClick={() => {
              setCurrentPage(page);
            }}
            key={index}
          >
            {page}
          </button>
        );
      })}
      <button
        className="h-10 border-2 border-blue-700 w-10 rounded-r-lg"
        onClick={() => {
          currentPage < maxPage
            ? setCurrentPage(currentPage + 1)
            : setCurrentPage(currentPage);
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Pagination;
