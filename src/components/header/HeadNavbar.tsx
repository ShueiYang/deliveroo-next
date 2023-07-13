import Image from "next/image";
import Logo from "./headItems/Logo";


const HeadNavbar = () => {
 

  return (
    <nav className="fixed w-full top-0 inset-x-0 flex justify-between items-center px-4 h-[72px] z-10 bg-orange-50">
      <Logo />
      <div className="relative max-w-[500px] grow hidden lg:block ml-2">
        <input 
          type="text"
          name="search"
          className="w-full px-7 py-1.5 outline-none focus:ring-2 focus:ring-zinc-500 rounded-sm"
          placeholder="Chercher Subway - Rambuteau"    
        />
        <i className="absolute icon-search left-0.5 inset-y-2 text-slate-400"></i>
      </div>

      <a href="https://github.com/ShueiYang/deliveroo-next"
        className="hidden md:flex items-center mx-2 border-none"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          className="w-6"
          src="/icons/github.svg"
          alt="github"
          width={20}
          height={20}
        />
        <span>Source</span>
      </a>

      <div className="flex gap-2">
        <button className="hidden sm:flex items-center">
          <i className="icon-cart mr-2"></i> 
          <span>0,00 €</span> 
        </button>
        <button className="hidden sm:flex items-center">
          <i className="icon-user mr-2"></i> 
          <span>Inscription ou connexion</span> 
        </button>

        <button className="flex items-center border-[1px] border-[#e5e7eb]">
          <i className="icon-menu-bars mr-2"></i>
            Menu
        </button>
      </div>
    </nav>  
  )
}

export default HeadNavbar;