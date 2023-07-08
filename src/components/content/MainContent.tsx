"use client"

import { useState } from "react";
import MenuLists from "./MenuLists";
import Cart from "./Cart";
import useCart from "../../hooks/useCart";
import { DeliverooData } from "../../../data.types";

export interface RambuteauRawData {
  datas: DeliverooData
}

export interface cartProps {
  id: string
  name: string
  price: string
  quantity: number
}


const MainContent = ({datas}: RambuteauRawData) => {

  const [ cart, setCart ] = useState<cartProps[]>([]);
  
  const { addCart, deleteCart, removeCart } = useCart(cart, setCart);
  

  return (
    <div className="container flex flex-col md:flex-row bg-slate-100">
      <MenuLists 
        datas={datas}
        addCart={addCart}
      />  
      <Cart 
        cart={cart}
        addCart={addCart}
        removeCart={removeCart}
        deleteCart={deleteCart}
      />
    </div>
  )
}

export default MainContent;