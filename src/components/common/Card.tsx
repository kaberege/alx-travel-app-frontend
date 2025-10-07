import React from "react";
import { CardProps } from "../../interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="overflow-hidden rounded-lg border shadow-lg">
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
