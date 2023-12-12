"use client";

import { Comment } from "@/types";
import StarList from "./starlist";
import Image from "next/image";

interface CommentCard {
  data: Comment;
}

interface UserClerk {
  user: {
    attributes: {
      username: string;
      image_url: string;
    };
  };
}

const CommentCard: React.FC<CommentCard> = ({ data }) => {
  //@ts-ignore
  const userData: UserClerk = data;

  return (
    <div className="bg-gradient-to-r from-white to-blue-100 shadow-md group cursor-pointer rounded-xl border p-3 space-y-4">
    {/* User Information */}
    <div className="flex items-center space-x-4">
      {/* User Image */}
      <Image
        className="rounded-full border-2 border-blue-500"
        width={40}
        height={40}
        alt="User image"
        src={userData.user.attributes.image_url}
      />

      {/* User Details */}
      <div>
        <p className="font-semibold text-lg text-blue-700">{/* Add user title or content here */}</p>
        <p className="font-semibold text-xs text-gray-600">{userData.user.attributes.username}</p>
        <div className="border-b border-gray-300 my-2"></div>
        <p className="font-semibold text-md text-gray-800">{data.message}</p>
      </div>
    </div>

    {/* Rating and Review */}
    <div className="flex justify-between items-center">
      {/* Star Rating */}
      <StarList raiting={data.rate} />

      {/* Display Rating */}
      <span className="bg-blue-500 rounded text-white text-xs px-2 py-1">
        {data.rate}
      </span>
    </div>
  </div>
  );
};

export default CommentCard;
