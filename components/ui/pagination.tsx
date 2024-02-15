import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        onPageChange(page);
    };

    const pageNumbers: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-sm">
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={isFirstPage}
                        className={`flex items-center justify-center px-3 h-8 ${isFirstPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'} ${isFirstPage ? 'ms-0' : ''} leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg`}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map((page) => (
                    <li key={page}>
                        <button
                            onClick={() => handlePageChange(page)}
                            className={`flex items-center justify-center px-3 h-8 ${currentPage === page ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                        >
                            {page}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={isLastPage}
                        className={`flex items-center justify-center px-3 h-8 ${isLastPage ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-700 dark:hover:bg-gray-700 dark:hover:text-white'} leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg`}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;