import Logo from "./headItems/Logo";


const HeadNavbar = () => {
 

  return (
    <nav className="flex justify-between items-center h-[72px] sticky top-0 z-10 bg-orange-50">
      <Logo />

      <div className="flex gap-2">
        <a className="flex items-center " href="test/" >
            <i className="icon-cart mr-2"></i> 
            <span>0,00 €</span> 
        </a>
        <a className="flex items-center"  href="test/" >
            <i className="icon-user mr-2"></i> 
            <span>Inscription ou connexion</span> 
        </a>

        <button className="flex items-center border-[1px] border-[#e5e7eb]">
          <i className="icon-menu-bars mr-2"></i>
            Menu
        </button>
      </div>
    </nav>  
  )
}

export default HeadNavbar;