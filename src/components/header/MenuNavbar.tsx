import { useEffect, useMemo, useRef, useState } from "react";
import { LayoutNavigation } from "../../../data.types";
import { howManyItemsInMenuArray } from "@/utils/navUtility";



const MenuNavbar = ({layoutDatas}: {layoutDatas: LayoutNavigation[]}) => {

  const [priorityItems, setPriorityItems] = useState<LayoutNavigation[]>(layoutDatas);
  const [moreItems, setMoreItems] = useState<LayoutNavigation[]>([]);
  const [navWidthArray, setNavWidthArray] = useState<number[]>([])
  const [open, setOpen] = useState(false);
 
  const fullNavArray = useRef(layoutDatas);
  const navigationOuterRef = useRef<HTMLDivElement | null>(null);
  const navigationRef = useRef<HTMLUListElement | null>(null);
  const moreMenuRef = useRef<HTMLDivElement | null>(null);
  const moreNavRef = useRef<HTMLUListElement | null>(null);

  useEffect(()=> {
    if(navigationRef.current) {
      const widthArray = Array.from(navigationRef.current.children).map(item => 
        item.getBoundingClientRect().width   
      )
      setNavWidthArray(widthArray)
    }   
  }, []);

  useEffect(() => {
    const updateNavigation = () => {
      if(navigationOuterRef.current) {
        const outerWidth = navigationOuterRef.current.getBoundingClientRect().width * 85 / 100;
        const moreMenuWidth = moreMenuRef.current ? moreMenuRef.current.getBoundingClientRect().width : 80;
        const arrayAmount = howManyItemsInMenuArray(navWidthArray, outerWidth, moreMenuWidth, 1);
        const navItemCopy = fullNavArray.current;
        const menuArray = arrayAmount === 0 ? 1 : arrayAmount;
        const priorityItems = navItemCopy.slice(0, menuArray);
        console.log("arrayaMount", arrayAmount);
 
        setPriorityItems(priorityItems);
        setMoreItems(priorityItems.length !== navItemCopy.length ? 
          navItemCopy.slice(menuArray, navItemCopy.length) : []
        );
      }
    } 
    let resizeTimer: NodeJS.Timeout | null
    // use throttled behaviour
    function updateNavigationThrottled() {
      if(!resizeTimer) {
        resizeTimer = setTimeout(() => {
          updateNavigation();
          resizeTimer = null;
        }, 100);
      }
    }
    window.addEventListener("resize", updateNavigationThrottled);
    updateNavigation();

    return () => {
      if(resizeTimer) {
        clearTimeout(resizeTimer);
      }  
      window.removeEventListener("resize", updateNavigationThrottled);
    };
  }, [navWidthArray]);


  return (
    <div ref={navigationOuterRef} className="menuNav h-[72px] flex items-center justify-around bg-orange-50 px-4">
      <ul ref={navigationRef} className="flex gap-8 max-w-[85%] max-h-[72px]">
        {priorityItems.map(labelName => {
          return(
            <li 
              key={labelName.layoutId} 
              className="flex items-center h-[72px] whitespace-nowrap text-sm text-[#00b8a9] cursor-pointer"
            >
              {labelName.label}
            </li>
          )
        })}  
      </ul>
      { moreItems.length > 0 && 
        <div ref={moreMenuRef}  className="relative w-20">
          <button 
            className="flex justify-center items-center gap-2 w-full"
            onClick={()=> {setOpen(!open)}}
          >
            <span>Plus</span>
            <i className="icon-chevron-down"></i>
          </button>
          { open && 
            <ul ref={moreNavRef} className="absolute top-10 -left-10">
              {moreItems.map(labelName => {
                return (
                  <li key={labelName.layoutId} className="w-36 h-9">
                    {labelName.label}
                  </li>
                )
              })}
            </ul>
          }
        </div>
      }
    </div>
  )
}

export default MenuNavbar;