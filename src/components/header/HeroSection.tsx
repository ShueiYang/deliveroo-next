import { Fragment } from "react";
import Image from "next/image";
import Button from "./headItems/Button";
import { RambuteauRawData } from "../content/MainContent";

const HeroSection = ({datas}: RambuteauRawData) => {

  const headerSpan1 = datas.header.headerTags.lines[0].spans
  const headerSpan2 = datas.header.headerTags.lines[1].spans

  return (
    <section className="relative flex flex-col md:flex-row gap-6 py-8 ">
      <div className="relative basis-4/12">
        <Image 
          className="object-cover w-full h-full max-h-64"
          src={datas.meta.metatags.image}
          width={450}
          height={250} 
          alt="Subway" 
          priority
        />
        {/* <img className="object-cover w-full h-full max-h-64"
          src={datas.meta.metatags.image} alt="Subway" 
        /> */}
        <div className="btn-0">
          <Button />
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between flex-1">
        <div className="h-full">
          <h1 className="xl:text-[40px]">{datas.header.title}</h1>
          <div className="pt-2">
            <span className="pr-1">15 - 25 min</span>
            {
              headerSpan1.map(span => {
                return(
                  <span key={span.key} className="font-medium">
                      &nbsp;{span.text}
                  </span>
                )
              })
            }
          </div>

          <div className="flex flex-wrap gap-0.5 items-center pt-2">
            {
              headerSpan2.map((span ,i) => {
                return(
                  <Fragment key={i}>
                     { span.icon && <i className={`icon-${span.icon.name}`}></i> }                  
                    <div key={i} className="font-medium whitespace-nowrap">      
                      { span.typeName === "UISpanSpacer" && ""}
                      { span.typeName === "UISpanText" && span.text}
                    </div>
                  </Fragment>
                )
              })
            }
          </div>

          <div className="pt-4 flex items-center">
            <i className="icon-INFO_CIRCLE text-2xl"></i>
            <div className="flex flex-col mx-4">
              <span>Sandwich</span>
              <span>Allergene</span>
            </div>
            <i className="icon-chevron-right"></i>     
          </div>      
        </div>
        <div className="flex flex-col items-start pt-3">     
          <div className="flex mb-2">
            <Image 
              className="w-6 mr-4" 
              src="/icons/bike.svg"
              alt="bike"
              width={25}
              height={25}
            />
            {/* <img className="w-6 mr-4" src="/icons/bike.svg" alt="bike" /> */}
            <span>Livrée dans 15 - 25 min</span> 
            <span>Modifie</span> 
          </div>  
          <div className="btn-1 xl:mt-4">
            <Button />
          </div>
        </div> 
      </div>
    </section>
  )
}

export default HeroSection;