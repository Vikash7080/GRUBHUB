import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resObj } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resObj?.info;

  return (
    <div className="bg-gray-100 p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <img
        className="w-full h-40 object-cover rounded-md mb-3"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="text-lg font-semibold truncate py-2 text-center sm:text-left">{name}</h3>
      <h4 className="text-sm text-gray-600 truncate text-center sm:text-left">{cuisines.join(", ")}</h4>
      <h4 className="text-sm font-medium mt-1 text-center sm:text-left">⭐ {avgRating}</h4>
      <h4 className="text-sm text-center sm:text-left">{costForTwo}</h4>
      <h4 className="text-sm text-center sm:text-left">🕒 {deliveryTime} mins</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
