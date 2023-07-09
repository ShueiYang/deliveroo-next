import { CustomHooksProps } from "../Cart";


const CartDetail = ({cart, addCart, deleteCart, removeCart }: CustomHooksProps) => {

  const deliveryFee = 2.5;
  let totalSum = 0;
  let totalQty = 0;

  return (
    <div className="bg-[#fff]">
     <div className="flex flex-col overflow-y-auto max-h-[350px] min-h-[50px] gap-4 mt-4">
        {cart.map(item => {
          // conversion from string € to number
          const price = Number(item.price.replace(/[^0-9,-]+/g,"").replace(",","."));
          const itemTotal = item.quantity * price
          totalSum = totalSum + item.quantity * price;
          totalQty = totalQty + item.quantity
          
          return (
            <div key={item.id} className="cart flex gap-4 justify-between">
              <div className="flex items-center whitespace-nowrap">
                {/* decremente quantity */}
                <button onClick={()=> {removeCart(item)}}>
                  <i className="icon-minus text-2xl"></i>
                </button>
                <span>{item.quantity}</span>
                {/* add quantity */}
                <button onClick={()=>{addCart(item)}}>
                 <i className="icon-plus text-2xl"></i>
                </button>    
              </div>
              <div className="cart-name">
                <span>{item.name}</span>
              </div>
              <div className="flex items-center">
                <div>
                  <span>{itemTotal.toFixed(2)}</span>
                </div>  
                  {/* delete items in one click */}
                <button onClick={()=> {deleteCart(item)}}>
                  <i className="icon-cross text-2xl"></i>
                </button>
              </div>
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