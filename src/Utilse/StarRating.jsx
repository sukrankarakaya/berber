
const StarRating = ({ selected = false, onSelect }) => (
  <svg
    onClick={onSelect}
    xmlns="http://www.w3.org/2000/svg"
    className={`h-8 w-8 text-gray-300 ${selected ? "text-yellow-400" : ""}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 0l2.04 6.221H18l-5.5 3.78 2.041 6.222L10 14.764 5.459 16.223 7.5 9.001 2 5.221h5.96L10 0z"
      clipRule="evenodd"
    />
  </svg>
);



export default StarRating;