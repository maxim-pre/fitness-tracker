import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ currentPage, setCurrentPage, itemsCount, pageSize }) => {
  const maxPage = Math.floor(itemsCount / pageSize);
  let pages = [];
  if (currentPage === 1) {
    pages = [1, 2, 3];
  } else if (currentPage === maxPage) {
    pages = [currentPage - 2, currentPage - 1, currentPage];
  } else {
    pages = [currentPage - 1, currentPage, currentPage + 1];
  }

  return (
    <div className="flex bg-white rounded">
      <button
        className="h-12 border-2 border-blue-700 w-12 border-r-0 rounded-l-lg"
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
            className={`h-12 border-2 border-blue-700 w-12 border-r-0 font-bold ${
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
        className="h-12 border-2 border-blue-700 w-12 rounded-r-lg"
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
