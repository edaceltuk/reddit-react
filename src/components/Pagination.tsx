import React,{useState}  from "react";

interface ListProps {
  currentPage: number
  setCurrentPage: Function
  totalPageCount: number
}

const Pagination = (props: ListProps) => {
  const [currentPage, setPage]=useState(1);

  const handlePaginationClick = (page: number) => {
    let newCount = currentPage + page;

    if (newCount > props.totalPageCount) newCount = props.totalPageCount;
    else if (newCount <= 0) newCount = 1;
    setPage(newCount)
    props.setCurrentPage(newCount);
  };

  return (
    <div className="list paginate" data-testid="paginate">
      <div className="pagination">
        <button onClick={() => handlePaginationClick(-1)} data-testid="prev-button">Prev</button>
        {[...Array(props.totalPageCount)].map((_, index) => (
          <p
            key={index}
            data-active={index + 1 === currentPage}
            onClick={() => handlePaginationClick(index)}
            data-testid="page-item"
          >
            {index + 1}
          </p>
        ))}
        <button onClick={() => handlePaginationClick(+1)} data-testid="next-button">Next</button>
      </div>
    </div>
  );
};

export default Pagination;
