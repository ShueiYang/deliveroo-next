import Logo from "./headItems/Logo";


const HeadNavbar = () => {
 

  return (
    <nav className="fixed w-full top-0 inset-x-0 flex justify-between items-center px-4 h-[72px] z-10 bg-orange-50">
      <Logo />

      <div className="flex gap-2">
        <a className="hidden sm:flex items-center" href="test/" >
            <i className="icon-cart mr-2"></i> 
            <span>0,00 €</span> 
        </a>
        <a className="hidden sm:flex items-center"  href="test/" >
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