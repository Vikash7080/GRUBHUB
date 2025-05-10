import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import Shimmer from "./Shimmer";
import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItemQuantity } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [expandedSection, setExpandedSection] = useState(null);
  const [foodTypeFilter, setFoodTypeFilter] = useState("all");
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  if (!resInfo) return <Shimmer />;

  const findRestaurantInfo = (cards) => {
    for (const card of cards) {
      if (card?.card?.card?.info) return card.card.card.info;
      if (card?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        return card.card.card.gridElements.infoWithStyle.restaurants[0].info;
      }
    }
    return null;
  };

  const restaurantInfo = findRestaurantInfo(resInfo.cards) || {};
  const {
    name = "Restaurant Name",
    cuisines = ["Cuisine not available"],
    avgRating = "N/A",
    costForTwoMessage = "N/A",
    locality,
    areaName,
    city,
    cloudinaryImageId,
  } = restaurantInfo;

  const menuSections =
    resInfo?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const validSections = menuSections.filter(
    (section) =>
      section?.card?.card?.title &&
      (section?.card?.card?.itemCards || section?.card?.card?.categories)
  );

  const toggleSection = (title) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  const filterItemsByType = (items) => {
    if (foodTypeFilter === "all") return items;
    return items.filter((item) => {
      const isVeg =
        item?.card?.info?.isVeg !== undefined
          ? item.card.info.isVeg
          : item?.card?.info?.itemAttribute?.vegClassifier === "VEG";
      return foodTypeFilter === "veg" ? isVeg : !isVeg;
    });
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleQuantityUpdate = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ id: itemId, quantity: newQuantity }));
  };

  const renderItemCards = (items) => {
    const filteredItems = filterItemsByType(items);
    if (filteredItems.length === 0) {
      return (
        <div className="py-4 text-center text-gray-500">
          No {foodTypeFilter === "all" ? "" : foodTypeFilter} items found in this section
        </div>
      );
    }

    return filteredItems.map((item, idx) => {
      const itemInfo = item.card?.info;
      const cartItem = cartItems.find((cartItem) => cartItem.id === itemInfo.id);
      const quantity = cartItem?.quantity || 0;

      return (
        <div
          key={`${itemInfo.id}_${idx}`}
          className="flex flex-col md:flex-row justify-between py-4 border-b last:border-b-0"
        >
          <div className="flex-1">
            <div className="flex items-start">
              {itemInfo.itemAttribute?.vegClassifier && (
                <span className="mr-2">
                  {itemInfo.itemAttribute.vegClassifier === "VEG" ? (
                    <span className="text-green-600">🟢</span>
                  ) : (
                    <span className="text-red-600">🔴</span>
                  )}
                </span>
              )}
              <div>
                <h3 className="font-medium text-gray-800">{itemInfo.name}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  ₹{(itemInfo.price ?? itemInfo.defaultPrice ?? 0) / 100}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {itemInfo.description}
                </p>
              </div>
            </div>
          </div>
          
          {itemInfo.imageId && (
            <div className="mt-4 md:mt-0 md:ml-4 w-24 h-24 relative">
              <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${itemInfo.imageId}`}
                alt={itemInfo.name}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
             {quantity > 0 ? (
  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-600 text-xs font-bold px-2 py-1 rounded shadow-sm border border-gray-200 flex items-center gap-2">
    <button
      className="px-1 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleQuantityUpdate(itemInfo.id, quantity - 1);
      }}
    >
      -
    </button>
    <span>{quantity}</span>
    <button
      className="px-1 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleQuantityUpdate(itemInfo.id, quantity + 1);
      }}
    >
      +
    </button>
  </div>
) : (
  <button
    className="absolute bottom-1 left-1/2 transform -translate-x-1/2 bg-white text-green-600 text-xs font-bold px-3 py-1 rounded shadow-sm border border-gray-200 hover:shadow-md transition-all cursor-pointer"
    onClick={(e) => {
      e.stopPropagation();
      handleAddItem(itemInfo);
    }}
  >
    ADD +
  </button>
)}
              
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-4 px-4 pb-8">
      {/* Restaurant Header */}
      <div className="relative rounded-xl overflow-hidden mb-6 h-48 sm:h-64 md:h-72 lg:h-80 bg-gray-100">
        {cloudinaryImageId && (
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1200,h_480/${cloudinaryImageId}`}
            alt={name}
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{name}</h1>
          <p className="text-sm sm:text-base text-gray-200">{cuisines.join(", ")}</p>
        </div>
      </div>

      {/* Info & Filters */}
      <div className="bg-white p-4 rounded-xl shadow-md mb-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <p className="text-gray-600 text-sm sm:text-base">
            {[locality, areaName, city].filter(Boolean).join(", ")}
          </p>
          <div className="flex items-center gap-4">
            <div className="border border-gray-200 p-2 rounded-md text-center">
              <span className="flex items-center text-green-600 font-medium">
                ⭐ {avgRating}
              </span>
              <hr className="my-1 border-gray-200" />
              <span className="text-xs sm:text-sm text-gray-500">{costForTwoMessage}</span>
            </div>
          </div>
        </div>

        {/* Food Type Filter Buttons */}
        <div className="mt-4 flex flex-wrap gap-2">
          {["all", "veg", "non-veg"].map((type) => {
            const baseStyle = "cursor-pointer px-3 py-1 rounded-full text-sm border";
            const isActive = foodTypeFilter === type;
            const activeBg =
              type === "veg"
                ? "bg-green-500 text-white border-green-500"
                : type === "non-veg"
                ? "bg-red-500 text-white border-red-500"
                : "bg-amber-500 text-white border-amber-500";
            const inactive = "bg-white text-gray-700 border-gray-300";
            return (
              <button
                key={type}
                className={`${baseStyle} ${isActive ? activeBg : inactive}`}
                onClick={() => setFoodTypeFilter(type)}
              >
                {type === "veg" ? "🟢 Veg Only" : type === "non-veg" ? "🔴 Non-Veg Only" : "All"}
              </button>
            );
          })}
        </div>
      </div>

      {/* Menu Sections */}
      <div className="space-y-4">
        {validSections.map((section) => {
          const title = section.card.card.title;
          const itemCards = section.card.card.itemCards || [];
          const categories = section.card.card.categories || [];

          const totalItems = filterItemsByType([
            ...itemCards,
            ...categories.flatMap((cat) => cat.itemCards || []),
          ]).length;

          if (totalItems === 0) return null;

          return (
            <div key={title} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleSection(title)}
              >
                <span className="text-lg">{title} ({totalItems})</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    expandedSection === title ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {expandedSection === title && (
                <div className="px-4 pb-4">
                  {itemCards.length > 0 && renderItemCards(itemCards)}
                  {categories.map((category, idx) => {
                    const filtered = filterItemsByType(category.itemCards || []);
                    if (filtered.length === 0) return null;
                    return (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold text-gray-800 mt-4">
                          {category.title}
                        </h3>
                        {renderItemCards(filtered)}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
