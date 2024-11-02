import { useState,useContext } from "react";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import {navItemTypes} from "../types/App-types";
import NavDialog from "./Partials/NavDialog";
import { Orders,OrderContext } from "../contexts/OrderContext";

export default function Nav(){

    const navItems:navItemTypes[]=[
        {
            name:"Collection",
            url:"#"
        },
        {
            name:"Men",
            url:"#"
        },
        {
            name:"Women",
            url:"#"
        },
        {
            name:"About",
            url:"#"
        },
        {
            name:"Contact",
            url:"#"
        },
    ]

    const ContextInfo = useContext(OrderContext);

    const [isOpen, setIsOpen] = useState(false);

    const OpenDialog = () => {
        setIsOpen(!isOpen)
    }

    return(
        <header className="flex border-b w-full justify-between px-4 items-cneter">
            <nav className="flex gap-8 items-center">
                <h2 className="tracking-tight font-extrabold text-2xl ">Olakicks</h2>
                <ul className="flex gap-6">
                    {
                        navItems.map((item,index) => {
                            return(
                                <a href={item.url} key={index}>
                                    <li className="text-sm text-gray-500 h-20 flex items-center hover:border-b-2 hover:border-customOrange transition-all">{item.name}</li>
                                </a>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className="flex gap-6 items-center">
                <button className="relative">
                    <div className="badge">
                        <span>{Number(ContextInfo.orders?.Orders.length) - 1}</span>
                    </div>
                    <img src={cart} className="h-5 w-5" alt="cart" onClick={OpenDialog}/>
                </button>
                <button className="relative">
                    <img src={avatar} className="h-10 w-10 hover:border-customOrange hover:rounded-full hover:border-2 transition-all" alt="avatar" onClick={OpenDialog}/>
                    <NavDialog isOpen={isOpen}/>
                </button>
            </div>
        </header>
    )
}