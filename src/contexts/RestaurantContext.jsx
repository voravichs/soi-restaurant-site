import React, { createContext, useState } from 'react';

// create context
export const RestaurantContext = createContext();

const RestaurantProvider = ({children}) => {
  // products state
  const [restaurant, setRestaurant] = useState(0);

  return <RestaurantContext.Provider value={{restaurant, setRestaurant}}>{children}</RestaurantContext.Provider>;
};

export default RestaurantProvider;
