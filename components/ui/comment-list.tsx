"use client";
import { Comment, Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import CommentCard from "./comment-card";
import React from "react";
import StarList from "./starlist";

interface CommentListProps {
  title: string;
  items: Product;
}

const CommentList: React.FC<CommentListProps> = ({ title, items }) => {

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);

  if (!items || !items.comments || items.comments.length === 0) {
    return <NoResults />;
  }
const averageFunction = (comments: Comment[]) => {
  const sum = comments.reduce((acc, comment) => acc + comment.rate * 1, 0);
  const count = comments.length;

  return count > 0 ? sum / count : 0;
};
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.comments.slice(startIndex, endIndex);

  const averageRating = averageFunction(items.comments);

  const totalPages = Math.ceil(items.comments.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(totalPages, prevPage + 1));
  };

  return (
    <div className="mt-8 lg:col-span-4 lg:mt-0">
    <h3 className="font-extrabold text-4xl text-black mb-6">{title}</h3>
  
    {/* Average Rating */}
    <div className="bg-gradient-to-r from-white to-blue-100 rounded-md p-6 shadow-lg mb-6">
      <span className="text-lg text-black">
        Average Rating:{" "}
        <span className="font-semibold text-2xl">{Number(averageRating)}</span>
      </span>
      <StarList raiting={Number(averageRating)}/>
    </div>
  
    {/* Comment Cards */}
    <div className="grid gap-6">
      {currentItems.map((item) => (
        <CommentCard key={item.id} data={item} />
      ))}
    </div>
  
    {/* Pagination */}
    <div className="flex flex-col items-center justify-end mt-8">
      <span className="text-sm text-gray-700 dark:text-gray-400 mb-4">
        Showing{" "}
        <span className="font-semibold text-gray-900 ">{startIndex + 1}</span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 ">{endIndex}</span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 ">{items.comments.length}</span>{" "}
        Entries
      </span>
  
      {/* Page Navigation Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handlePrevPage}
          className="btn-pagination bg-blue-600 hover:bg-blue-300 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out"
        >
          Prev
        </button>
        <button
          onClick={handleNextPage}
          className="btn-pagination bg-blue-600 hover:bg-blue-300 text-white px-6 py-3 rounded-full transition duration-300 ease-in-out"
        >
          Next
        </button>
      </div>
    </div>
  </div>
  );
};

export default CommentList;
