import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ id, title, content, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500">User ID: {userId}</p>
        <p className="text-sm text-gray-500">ID: {id}</p>
      </div>
      <p className="text-gray-600 mb-4">{content}</p>
    </div>
  );
};

export default PostCard;
