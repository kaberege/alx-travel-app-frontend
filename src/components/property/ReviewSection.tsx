import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { type ReviewsProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewsProps[] }> = ({ reviews }) => {
  const [reviewss, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [propertyId, setPropertyId] = useState<number>(0);

  useEffect(() => {
    console.log(reviewss);
    setPropertyId(1);
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId, reviewss]);

  if (!loading) {
    return <p>Loading reviews...</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-8">
      {reviews.map((review, index) => (
        <div key={index} className="">
          <div className="flex items-center">
            <Image
              src={review.avatar}
              width={500}
              height={500}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold text-sm text-zinc-950">{review.name}</p>
              <p className="text-zinc-500 text-xs">{review.experience} stars</p>
            </div>
          </div>
          <div className="my-3 flex items-center space-x-2 text-[13px]">
            <span className="text-zinc-900">{review.time}</span>
            <li className="text-zinc-500 ">Family trip</li>
          </div>
          <p className="text-xs text-zinc-800">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
