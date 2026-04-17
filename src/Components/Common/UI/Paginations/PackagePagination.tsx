"use client";

import React from "react";

interface PackagePaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

const PackagePagination: React.FC<PackagePaginationProps> = ({
    currentPage = 1,
    totalPages = 4,
    onPageChange,
}) => {
    const handleClick = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange?.(page);
    };

    return (
        <div
            className="pagination-area mt-60 wow animate fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
        >
            {/* Prev Button */}
            <div className="paginations-button">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(currentPage - 1);
                    }}
                >
                    <svg width="10" height="10" viewBox="0 0 10 10">
                        <g>
                            <path
                                d="M7.86133 9.28516C7.14704 7.49944 3.57561 5.71373 1.43276 4.99944C3.57561 4.28516 6.7899 3.21373 7.86133 0.713728"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                    Prev
                </a>
            </div>

            {/* Page Numbers */}
            <ul className="paginations">
                {Array.from({ length: totalPages }, (_, i) => {
                    const page = i + 1;
                    return (
                        <li
                            key={page}
                            className={`page-item ${currentPage === page ? "active" : ""}`}
                        >
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(page);
                                }}
                            >
                                {String(page).padStart(2, "0")}
                            </a>
                        </li>
                    );
                })}
            </ul>

            {/* Next Button */}
            <div className="paginations-button">
                <a
                    href="#"
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(currentPage + 1);
                    }}
                >
                    Next
                    <svg width="10" height="10" viewBox="0 0 10 10">
                        <g>
                            <path
                                d="M1.42969 9.28613C2.14397 7.50042 5.7154 5.7147 7.85826 5.00042C5.7154 4.28613 2.50112 3.21471 1.42969 0.714705"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default PackagePagination;