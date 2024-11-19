import { log } from "console";
import Link from "next/link";
import React from "react";

interface Props {
  currentPage: number;
  count: number;
  limitResult: number;
  searchParams: { page?: string; search?: string };
}
const Pagination = ({
  currentPage,
  count,
  limitResult,
  searchParams,
}: Props) => {
  const totalPages = Math.ceil(count / limitResult);
  const { search } = searchParams;

  return (
    <div className="inline-flex items-center justify-center gap-3 p-3 mb-3">
      <Link
        href={`?page=${currentPage - 1}${search ? `&search=${search}` : ""}`}
        className={`inline-flex items-center justify-center rounded border  border-yellow-500 bg-yellow-300 text-indigo-900 rtl:rotate-180 px-4 py-2 ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        } `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>

      <p className="text-base text-gray-900">
        <span className="font-semibold">{currentPage}</span>

        <span className="mx-0.25">/</span>
        {totalPages}
      </p>

      <Link
        href={`?page=${currentPage + 1}${search ? `&search=${search}` : ""}`}
        className={`${
          currentPage === totalPages && "opacity-50 pointer-events-none"
        } inline-flex items-center justify-center rounded border border-yellow-500 bg-yellow-300  text-indigo-900 rtl:rotate-180 px-4 py-2`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default Pagination;
