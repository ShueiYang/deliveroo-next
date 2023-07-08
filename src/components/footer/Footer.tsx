

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full h-14 bg-zinc-700 mt-6">
        <p className="text-sm text-slate-50">
          &copy; {new Date().getFullYear()} Developed by ShueiYang at Le Reacteur ❤️
        </p>   
    </footer>
  )
}

export default Footer;