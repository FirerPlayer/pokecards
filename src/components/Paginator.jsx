import { useState } from "react";
import Pagination from "react-paginating";

function Paginator({ itemsTotal, limit, onChange, setLimit }) {
  const [currentPage, setCurrentPage] = useState(1);
  let pageCount = 5;
  let NextIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-2 md:stroke-1 cursor-pointer transition-all ease-linear md:hover:stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    );
  };

  const PreviousIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-2 md:stroke-1 cursor-pointer transition-all ease-linear md:hover:stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
    );
  };

  const FirstIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-2 md:stroke-1 cursor-pointer transition-all ease-linear md:hover:stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
        />
      </svg>
    );
  };

  const LastIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 stroke-2 md:stroke-1 cursor-pointer transition-all ease-linear md:hover:stroke-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
        />
      </svg>
    );
  };

  let handlePageChange = (page, e) => {
    onChange(page, e);
    setCurrentPage(page);
  };

  return (
    <Pagination
      total={itemsTotal}
      limit={limit}
      pageCount={pageCount}
      currentPage={currentPage}
    >
      {({
        pages,
        currentPage,
        hasNextPage,
        hasPreviousPage,
        previousPage,
        nextPage,
        totalPages,
        getPageItemProps,
      }) => (
        <div className="flex flex-row items-center justify-center w-fit my-5 font-ubunto space-x-1">
          <select
            defaultValue={limit}
            onChange={(ev) => {
              setLimit(Number(ev.target.value));
              setCurrentPage(1);
            }}
          >
            {[5, 10, 15, 20, 25].map((value, i) => (
              <option key={i} value={value}>
                {value}
              </option>
            ))}
            {/* <DownIcon /> */}
          </select>
          <button
            className="md:hover:bg-slate-100 md:hover:bg-opacity-50 md:ring-0 ring-1 ring-yellow-50 rounded-md p-1 md:p-2 md:text-xl text-lg transition-[1s]"
            {...getPageItemProps({
              pageValue: 1,
              onPageChange: handlePageChange,
            })}
          >
            <FirstIcon />
          </button>

          {hasPreviousPage && (
            <button
              className="md:hover:bg-slate-100 md:hover:bg-opacity-50 md:ring-0 ring-1 ring-yellow-50 rounded-md p-1 md:p-2 md:text-xl text-lg transition-[1s]"
              {...getPageItemProps({
                pageValue: previousPage,
                onPageChange: handlePageChange,
              })}
            >
              <PreviousIcon />
            </button>
          )}

          {pages.map((page) => {
            const isActive = currentPage === page;
            return (
              <button
                className={`${
                  isActive
                    ? `bg-yellow-300`
                    : `md:hover:bg-slate-100 md:hover:bg-opacity-50 md:ring-0 ring-1 ring-yellow-50`
                } rounded-md p-1 md:px-3 md:py-2 md:text-xl text-lg transition-[1s]`}
                key={page}
                disabled={isActive}
                {...getPageItemProps({
                  pageValue: page,
                  onPageChange: handlePageChange,
                })}
              >
                {page}
              </button>
            );
          })}

          {hasNextPage && (
            <button
              className="md:hover:bg-slate-100 md:hover:bg-opacity-50 md:ring-0 ring-1 ring-yellow-50 rounded-md p-1 md:p-2 md:text-xl text-lg transition-[1s]"
              {...getPageItemProps({
                pageValue: nextPage,
                onPageChange: handlePageChange,
              })}
            >
              <NextIcon />
            </button>
          )}

          <button
            className="md:hover:bg-slate-100 md:hover:bg-opacity-50 md:ring-0 ring-1 ring-yellow-50 rounded-md p-1 md:p-2 md:text-xl text-lg transition-[1s]"
            {...getPageItemProps({
              pageValue: totalPages,
              onPageChange: handlePageChange,
            })}
          >
            <LastIcon />
          </button>
        </div>
      )}
    </Pagination>
  );
}

export default Paginator;
