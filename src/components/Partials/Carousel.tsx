import React from "react";
import productImg1 from "../../images/image-product-1.jpg";
import productImg2 from "../../images/image-product-2.jpg";
import productImg3 from "../../images/image-product-3.jpg";
import productImg4 from "../../images/image-product-4.jpg";
import CarouselNavTab from "./CarouselNavTab";

export default function  Carousel(){
    const tabListImage = [productImg1,productImg2,productImg3,productImg4]
    const [activeTab,setActiveTab] = React.useState(0)
    const changeImg = (id:number) => {
        setActiveTab(id)
        return tabListImage[id]
    }
    return(
    <section className="carousel flex flex-col gap-5">
        <img className="main-img" src={tabListImage[activeTab]} alt={`Tab panel ${activeTab + 1}`}/>
        <section role="tabpanel" className="flex justify-between">
            {
                tabListImage.map((img,id)=>{
                    return(
                        <CarouselNavTab img={img} id={id} key={img + id} Click={() => {changeImg(id)}} active={id === activeTab}/>
                    )
                })
            }
        </section>
    </section>
    )
 }