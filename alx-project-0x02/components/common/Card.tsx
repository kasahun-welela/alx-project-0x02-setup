import { CardProps } from "@/interfaces";
import React from "react";

function Card({ title, content }: CardProps) {
  return (
    <div className="border border-gray-300 rounded-md p-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{content}</p>
    </div>
  );
}

export default Card;
