import Image from "next/image"


const Logo = () => {

  return (
    <div>
      <Image 
        className="w-32"
        src="/icons/logo-teal.svg"
        width={100}
        height={100} 
        alt="deliveroo logo" 
      />
      {/* <img 
        className="w-32"
        src="/icons/logo-teal.svg" 
        alt="deliveroo logo" 
      /> */}
    </div>
  )
}

export default Logo