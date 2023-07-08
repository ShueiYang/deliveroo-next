import Image from "next/image"
import { Item } from "../../../../data.types"
import { cartProps } from "../MainContent"

interface MenuCardProps {
  categoryId: string
  name: string
  items: Item[]
  addCart: (foodItem: cartProps) => void
}


const MenuCard = ({ categoryId, name, items, addCart }: MenuCardProps) => {

  const categoryFilter = items.filter(item => {
    return item.categoryId === categoryId
  })

  return (
    <>
      <h3 className="w-[95%] mt-8 mb-4 mx-auto">{name}</h3>
      <div className="max-w-[95%] grid grid-cols-1 xl:grid-cols-2 gap-2 mx-auto">
        {
          categoryFilter.map(item => {        
            return (
              <div
                key={item.id} 
                className="w-full max-h-44 flex justify-between p-4 bg-[#FFF] drop-shadow-md overflow-auto"
                onClick={()=> {
                  addCart({
                    id: item.id,
                    name: item.name,
                    price: item.price.formatted,
                    quantity: 1
                  }) 
                }}           
              >
                <div className="mr-3">
                  <h4>{item.name}</h4>
                  <p className="text-sm my-2">{item.description}</p>
                  <p>{item.price.formatted}</p>
                </div>
                <div className="max-w-[25%] flex flex-none items-center">
                  <Image 
                    className="max-w-full max-h-full min-w-[90px] aspect-square border-2 border-gray-100"
                    src={item.image ? item.image.url : "/icons/placeholder.svg"}
                    width={100}
                    height={100}
                    alt={item.image ? item.image.altText : "placeholder"} 
                  />
                  {/* <img 
                    className="max-w-full max-h-full min-w-[90px] aspect-square border-2 border-gray-100"
                    src={item.image ? item.image.url : "/icons/placeholder.svg"}
                    alt={item.image ? item.image.altText : "placeholder"} 
                  /> */}
                </div>
              </div>
            )     
          })
        }
      </div>  
    </>
  )
}

export default MenuCard; 