import StarRating from "./StarRating";

const RatingBar = ({ totalStars, selectedStars, onStarClick }) => {
    return (
      <div className="relative w-52 h-10  rounded-full bg-transparent overflow-hidden">
       
        <div className="absolute top-0 left-0 h-full flex">
          {[...Array(totalStars)].map((_, index) => {
            const starCount = index + 1;
            return (
              <StarRating
                key={starCount}
                selected={starCount <= selectedStars}
                onSelect={() => onStarClick(starCount)}
              />
            );
          })}
        </div>
      </div>
    );
  };

  
  export default RatingBar 