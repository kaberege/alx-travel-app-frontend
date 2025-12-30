import Image from "next/image";
import { type ReviewsProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewsProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-8 md:grid-cols-2">
      {reviews.map((review, index) => (
        <div key={index}>
          <div className="flex items-center">
            <Image
              src={review.avatar}
              width={500}
              height={500}
              alt={review.name}
              className="mr-4 h-12 w-12 rounded-full"
            />
            <div>
              <p className="text-sm font-bold text-zinc-950">{review.name}</p>
              <data value={review.experience} className="text-xs text-zinc-500">
                {review.experience} stars
              </data>
            </div>
          </div>
          <div className="my-3 flex items-center space-x-2 text-[13px]">
            <time dateTime={review.time} className="text-zinc-900">
              {review.time}
            </time>
            <li className="ml-4 text-zinc-500">Family trip</li>
          </div>
          <p className="text-xs text-zinc-800">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
