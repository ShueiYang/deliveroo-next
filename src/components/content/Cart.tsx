import { useState } from "react";
import { cartProps } from "./MainContent";
import CartDetail from "./items/CartDetail";

export interface CustomHooksProps {
  cart: cartProps[]
  addCart: (foodItem: cartProps) => void
  deleteCart: (foodItem: cartProps) => void
  removeCart: (foodItem: cartProps) => void
}


const Cart = ({cart, addCart, deleteCart, removeCart }: CustomHooksProps) => {

  const [ open, setOpen ] = useState(false);
  
  return (
   <>
    { cart.length === 0 ?
      <div className="hidden md:empty-container sticky w-full md:w-[40%] xl:w-1/4 border-2 border-neutral-200 text-center">
        <div>
          <i className="icon-cart text-5xl text-zinc-400"></i>
          <p className="font-strat text-zinc-400">Votre panier est vide</p> 
        </div>
        <button className="bg-neutral-200 font-semibold text-zinc-400 px-4 py-3">
          Finaliser la commande
        </button>  
      </div>

    : <>
        <div className="hidden md:cart-container sticky w-full md:w-2/5 xl:w-1/4 border-2 border-neutral-200 text-center"> 
          <CartDetail 
            cart={cart}
            addCart={addCart}
            deleteCart={deleteCart}
            removeCart ={removeCart}
          />
          <button className="cmd-button">
            Finaliser la commande
          </button>  
        </div>
        <div className="flex flex-col md:hidden sticky bottom-0 w-[95%] my-4 mx-auto border-2 border-neutral-200 text-center z-10"> 
          { open &&
            <CartDetail 
              cart={cart}
              addCart={addCart}
              deleteCart={deleteCart}
              removeCart ={removeCart}
            />
          }
          <button className="cmd-button" onClick={()=> {setOpen(!open)}}>
            {open ? "Fermer mon panier" : "Voir mon panier"}
          </button>  
        </div>
      </>     
    }  
   </>  
  )
}

export default Cart;