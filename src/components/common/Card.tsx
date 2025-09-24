import React from "react";
import { CardProps } from "../../interfaces";
import Image from "next/image";

const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image
        src={image}
        width={500}
        height={500}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
