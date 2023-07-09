import { LayoutNavigation } from "../../../data.types";



const MenuNavbar = ({layoutDatas}: {layoutDatas: LayoutNavigation[]}) => {

    
  return (
    <div className="menuNav h-[72px] flex items-center justify-around bg-orange-50">
      <div className="flex gap-8 max-w-[85%] max-h-[72px] flex-wrap overflow-y-hidden">
        {
          layoutDatas.map(labelName => {
            return(
              <button 
                key={labelName.layoutId} 
                className="h-[72px] whitespace-nowrap text-sm text-[#00b8a9]"
              >
                {labelName.label}
              </button>
            )
          })    
        }
      </div>
      <button className="flex items-center gap-2">
        <span>Plus</span>
        <i className="icon-chevron-down"></i>
      </button>
    </div>
  )
}

export default MenuNavbar;