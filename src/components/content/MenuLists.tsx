
import { RambuteauRawData } from "./MainContent";
import MenuCard from "./items/MenuCard";

interface MenuListsProps extends RambuteauRawData {
  addCart: any
}

const MenuLists = ({ datas, addCart }: MenuListsProps) => {
  const categories = datas.meta.categories;
  const items = datas.items;

  return (
    <section className="w-full md:grow md:w-[60%] xl:w-3/4">
      <p className="w-[95%] mx-auto my-8 text-sm">
        Certains produits de la gamme sont en rupture momentanée suite au contexte actuel exceptionnel. Nous nous réservons le droit de remplacer la boisson Volvic 33cl par la boisson Evian 33cl en cas de rupture de stocks sur ce produit. Veuillez nous excuser pour la gêne occasionnée.
      </p>
      {
        categories.map(menuSection => {
               
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
        })
      }
    </section>
  )
}

export default MenuLists;