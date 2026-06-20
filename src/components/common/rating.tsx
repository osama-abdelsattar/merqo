import { cn } from "@/lib/utils";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

interface RatingProps extends React.ComponentProps<"div"> {
  rating: number;
  reviewersCount?: number | null;
  showText?: boolean;
  showReviews?: boolean;
}

function Rating({
  rating,
  reviewersCount = null,
  showText = true,
  showReviews,
  className,
  ...props
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const ratingLabel = `Rating: ${rating.toFixed(1)} out of 5 stars${
    showReviews && reviewersCount !== null ? `, ${reviewersCount} reviews` : ""
  }`;

  return (
    <div className={cn("flex items-center", className)} {...props}>
      <span className="sr-only">{ratingLabel}</span>
      <div className="flex items-center" aria-hidden="true">
        {Array.from({ length: fullStars }).map((_, i) => (
          <FaStar key={`full-${i}`} className="text-amber-500" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-amber-500" />}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-amber-500" />
        ))}
      </div>
      {showText && (
        <span className="ms-2 leading-4" aria-hidden="true">
          {rating.toFixed(1)}
          {showReviews && ` (${reviewersCount} reviews)`}
        </span>
      )}
    </div>
  );
}

export default Rating;
