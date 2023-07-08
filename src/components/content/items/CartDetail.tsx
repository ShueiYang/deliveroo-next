import { CustomHooksProps } from "../Cart";


const CartDetail = ({cart, addCart, deleteCart, removeCart }: CustomHooksProps) => {

  const deliveryFee = 2.5;
  let totalSum = 0;

  return (
    <div className="bg-[#fff]">
     <div className="flex flex-col overflow-y-auto max-h-[425px] min-h-[50px]">
        {cart.map(item => {
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
        })}
      </div>
      <div className="flex flex-col gap-3 py-5 border-y-2 mt-4">
        <div className="flex justify-between mx-4">
          <p>Sous-total</p>
          <p>{`${totalSum.toFixed(2)} €`}</p>
        </div>
        <div className="flex justify-between mx-4">
          <p>Frais de livraison</p>
          <p>{`${deliveryFee} €`}</p>
        </div>
      </div>
      <div className="flex justify-between mx-4 my-4">
        <p>Total</p>
        <p>{`${(totalSum + deliveryFee).toFixed(2)} €`}</p>
      </div>
    </div>
  )    
}

export default CartDetail;