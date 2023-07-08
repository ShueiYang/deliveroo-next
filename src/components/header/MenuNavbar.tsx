import { LayoutNavigation } from "../../../data.types";



const MenuNavbar = ({layoutDatas}: {layoutDatas: LayoutNavigation[]}) => {

    
  return (
    <div className="menuNav h-[72px] flex items-center justify-around bg-orange-50">
      <div className="flex max-w-[85%] overflow-hidden">
        {
          layoutDatas.map(labelName => {
            return(
              <button 
                key={labelName.layoutId} 
                className="h-6 flex items-center whitespace-nowrap mx-3 text-sm"
              >
                {labelName.label}
              </button>
            )
          })    
        }
      </div>
      <button>Plus</button>
    </div>
  )
}

export default MenuNavbar;