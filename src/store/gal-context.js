import { createContext, useState } from "react";

export const GalStore = createContext({
  items: [],
  favItems: [],
  removeItem: (id) => {},
  favItem: (id) => {},
  addItem: (data) => {},
});
const MyProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const addItem = (x) => {
    setItems([x, ...items]);
  };
  const removeItem = (id) => {
    setItems(
      items.filter((item) => {
        return item.id != id;
      })
    );
  };
  const favItem = (id) => {
    setItems(
      items.map((item) => {
        return item.id == id ? { ...item, isFav: !item.isFav } : item;
      })
    );
    setFavItems(
      items.filter((item) => {
        return item.isFav;
      })
    );
  };
  return (
    <GalStore.Provider
      value={{
        items: items,
        favItems: favItems,
        removeItem: removeItem,
        favItem: favItem,
        addItem: addItem,
      }}
    >
      {children}
    </GalStore.Provider>
  );
};
export default MyProvider;
