import { Dispatch, SetStateAction } from "react";
import { cartProps } from "@/components/content/MainContent";



function useCart(
  cart: cartProps[],  
  setCart: Dispatch<SetStateAction<cartProps[]>>
) {
  
  function addCart(foodItem: cartProps) {
    const newCart = [...cart];
    if (newCart.length) {
      const itemFound = newCart.find((item) => item.id === foodItem.id);
      if (itemFound) {
        itemFound.quantity = itemFound.quantity + 1;
        setCart(newCart);
      } else {
        setCart((prev) => {
          return [...prev, foodItem];
        });
      }
    } else {
      setCart((prev) => {
        return [...prev, foodItem];
      });
    }
  }

  function deleteCart(foodItem: cartProps) {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => item.id !== foodItem.id);
    setCart(cartFilter);
  }

  function removeCart(foodItem: cartProps) {
    const newCart = [...cart];
    const itemFound = newCart.find((item) => item.id === foodItem.id);
    if (itemFound) {
      if (itemFound.quantity === 1) {
        deleteCart(foodItem);
      } else {
        itemFound.quantity = itemFound.quantity - 1;
        setCart(newCart);
      }
    }
  }
  return {
    addCart,
    deleteCart,
    removeCart,
  };
}

export default useCart;
