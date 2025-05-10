import React, { useState, useEffect } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { toast } from "react-toastify";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.731714&lng=77.11076179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response.json();

      const restaurantSections = json?.data?.cards?.reduce((acc, card) => {
        const restaurants = card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restaurants) {
          return [...acc, ...restaurants];
        }
        return acc;
      }, []) || [];

      const uniqueRestaurants = restaurantSections.reduce((acc, restaurant) => {
        const uniqueKey = `${restaurant.info.id}-${restaurant.info.sla?.deliveryTime || 0}`;
        if (!acc.some(item =>
          `${item.info.id}-${item.info.sla?.deliveryTime || 0}` === uniqueKey)) {
          return [...acc, restaurant];
        }
        return acc;
      }, []);

      setListOfRestaurants(uniqueRestaurants);
      setFilteredRestaurants(uniqueRestaurants);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
      setError("Failed to load restaurants. Please try again later.");
      toast.error("Failed to load restaurants. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    if (onlineStatus === false) {
      toast.error("Looks like you're offline! Please check your connection.");
    }
  }, [onlineStatus]);

  if (loading) {
    return <Shimmer />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-white">
        <p className="text-red-500 text-lg mb-4">{error}</p>
        <button
          onClick={fetchData}
          className="cursor-pointer bg-[#FC8019] text-white px-4 py-2 rounded-xl hover:bg-[#e46d10] transition-all shadow-md"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 py-6 bg-[#f9f9f9] min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-6">
        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
          className="flex flex-col sm:flex-row gap-2 w-full md:w-auto"
        >
          <input
            type="text"
            className="w-full sm:w-auto border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FC8019] shadow-sm"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="cursor-pointer bg-[#FC8019] text-white px-4 py-2 rounded-xl hover:bg-[#e46d10] transition-all shadow-md"
          >
            Search
          </button>
        </form>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          <button
            className="cursor-pointer bg-gray-200 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-300 transition-colors shadow-sm"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
              setSearchText("");
            }}
          >
            Show All
          </button>
          <button
            className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-colors shadow-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.0
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated (4.0+)
          </button>
        </div>
      </div>

      {/* Restaurant Count */}
      <div className="mb-4 text-gray-600 font-medium">
        Showing {filteredRestaurants.length} of {listOfRestaurants.length} restaurants
      </div>

      {/* Restaurant Cards */}
      {filteredRestaurants.length === 0 ? (
        <div className="text-center py-10 bg-white rounded-xl shadow-md">
          <p className="text-lg text-gray-600 mb-4">No restaurants found matching your search.</p>
          <button
            className="cursor-pointer bg-[#FC8019] text-white px-4 py-2 rounded-xl hover:bg-[#e46d10] transition-all shadow-md"
            onClick={() => {
              setFilteredRestaurants(listOfRestaurants);
              setSearchText("");
            }}
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredRestaurants.map((restaurant) => (
            <Link
              key={`${restaurant.info.id}-${restaurant.info.sla?.deliveryTime || 0}`}
              to={"/restaurant/" + restaurant.info.id}
              className="transform transition-transform hover:scale-105"
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resObj={restaurant} />
              ) : (
                <RestaurantCard resObj={restaurant} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
