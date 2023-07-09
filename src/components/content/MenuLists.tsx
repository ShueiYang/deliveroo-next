
import Image from "next/image";
import { RambuteauRawData, cartProps } from "./MainContent";
import MenuCard from "./items/MenuCard";

interface MenuListsProps extends RambuteauRawData {
  addCart: (foodItem: cartProps) => void
}

const MenuLists = ({ datas, addCart }: MenuListsProps) => {
  const categories = datas.meta.categories;
  const items = datas.items;
  const heroImage = datas.meta.metatags.image;


  return (
    <section className="w-full md:grow md:w-[60%] xl:w-3/4">
      <p className="w-[95%] mx-auto my-8 text-sm">
        Certains produits de la gamme sont en rupture momentanée suite au contexte actuel exceptionnel. Nous nous réservons le droit de remplacer la boisson Volvic 33cl par la boisson Evian 33cl en cas de rupture de stocks sur ce produit. Veuillez nous excuser pour la gêne occasionnée.
      </p>

      <div className="flex justify-between items-center gap-6 w-[95%] mx-auto my-4 text-sm bg-[#fff] drop-shadow-md">
        <div className="flex flex-col mx-6 my-4">
          <h4>{datas.layoutGroups[1].layouts[0].header}</h4>
          <p className="my-2">
            {`Le concept ? Du sur-mesure préparé sous vos yeux !! Chez Subway®, c'est vous qui créez votre sandwich, votre salade ou votre wrap suivant vos envies et vos besoins.`}
          </p>
        </div>
        <Image 
          className="aspect-square rounded-full max-w-[50px] max-h-[50px] mx-6"
          src={heroImage}
          width={50}
          height={50} 
          alt="Subway"     
        />
      </div>

      { categories.map(menuSection => {      
          return (
            <div 
              key={menuSection.id}
              className="hover:cursor-pointer"
            >
              <MenuCard 
                categoryId={menuSection.id}
                name={menuSection.name} 
                items={items}
                addCart={addCart}
              />
            </div>
          )
      })} 
    </section>
  )
}

export default MenuLists;