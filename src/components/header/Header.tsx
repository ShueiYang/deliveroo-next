import { RambuteauRawData } from "../content/MainContent"
import HeadNavbar from "./HeadNavbar"
import HeroSection from "./HeroSection"


const Header = ({datas}: RambuteauRawData ) => {
  
    
  return (
    <div className="container pt-[72px]">
      <HeadNavbar />
      <HeroSection datas={datas} />   
    </div>
  )
}

export default Header;