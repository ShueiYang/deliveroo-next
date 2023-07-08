import { cartProps } from "./MainContent";

interface CustomHooksProps {
  cart: cartProps[]
  addCart: (foodItem: cartProps) => void
  deleteCart: (foodItem: cartProps) => void
  removeCart: (foodItem: cartProps) => void
}


const Cart = ({cart, addCart, deleteCart, removeCart }: CustomHooksProps) => {

  let totalSum = 0;

  return (
   <>
    { cart.length === 0 ?
      <div className="w-full md:grow md:w-2/5 xl:w-1/4 border-2 border-red-400 text-center">
        <p className="font-bold">CART EMPTY</p>   
      </div>

    :  <div className="w-full md:grow md:w-2/5 xl:w-1/4 border-2 border-red-400 text-center">
        {
          cart.map(item => {
            // conversion from string € to number
            const price = Number(item.price.replace(/[^0-9,-]+/g,"").replace(",","."));
            totalSum = totalSum + item.quantity * price;
            
            return (
              <div key={item.id} className="cart flex gap-2 justify-between">
                <div className="whitespace-nowrap">
                  {/* decremente quantity */}
                  <button onClick={()=> {removeCart(item)}}>-</button>
                  <span>{item.quantity}</span>
                  {/* add quantity */}
                  <button onClick={()=>{addCart(item)}}>+</button>    
                </div>
                <div>
                  <span>{item.name}</span>
                </div>
                <div>
                  <span>{item.price}</span>
                </div>  
                 {/* delete items in one click */}
                <button onClick={()=> {deleteCart(item)}}>X</button>
              </div>
            )
          })
        }
        <p>{`Total: ${totalSum.toFixed(2)}`}</p>
      </div>      
    }  
   </>  
  )
}

export default Cart;