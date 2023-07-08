import { RambuteauRawData } from "../content/MainContent"
import HeadNavbar from "./HeadNavbar"
import HeroSection from "./HeroSection"
import MenuNavbar from "./MenuNavbar"


const Header = ({datas}: RambuteauRawData ) => {
  
    
  return (
    <div className="container">
      <HeadNavbar />
      <HeroSection datas={datas} />
      <MenuNavbar  layoutDatas={datas.layoutNavigation}/>
    </div>
  )
}

export default Header;