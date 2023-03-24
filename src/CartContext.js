import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  const addToCart = (book) => {
    setItems((prevState) => [...prevState, { book }]);
  };

  const addToWishList = (book) => {
    setWishList((prevState) => [...prevState, { book }]);
  };

  const removeFromWishList = (book) => {
    console.log(book, "book");
    console.log(items, "items");
    setWishList((prevState) =>
      prevState.filter((item) => {
        return item.book.name !== book.name;
      })
    );
  };
  const clearCart = () => {
    setItems([]);
  };

  useEffect(() => {
    console.log(items, ">>>>>");
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        wishList,
        addToCart,
        addToWishList,
        removeFromWishList,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
