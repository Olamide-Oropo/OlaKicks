import React from "react";

interface CarouselNavTabType {
    img:string;
    id:number;
    Click:() => any;
    active:boolean
}

export default function CarouselNavTab({img,id,Click,active}:CarouselNavTabType){
    return(
        <div className="tabContainer" onClick={Click}>
            <img role="tab" id={`${id + 1}`} key={id} src={img} className="tab" alt={`Tab panel ${id + 1}`}/>
            <div className={active? "activeTabOverlay":"tabOverlay"} ></div>
        </div>
    )
}