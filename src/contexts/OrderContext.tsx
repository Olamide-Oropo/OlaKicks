import React, { ReactNode, SetStateAction } from "react";
import { createContext,useState,Dispatch } from "react";

export interface OrderType{
    image:string;
    Name:string;
    price:number;
    noOfOrders:number
}
export interface Orders {
    Orders:OrderType[]
};

export interface OrderContextType{
    orders:Orders,
    setOrders:Dispatch<SetStateAction<Orders>>
}

export const OrderContext = createContext<Partial<OrderContextType>>({});

interface OrderProviderType{
    children:ReactNode
}

export function OrderProvider({children}:OrderProviderType){
    const [orders, setOrders] = useState<Orders>({Orders:[
        {
            image:"",
            Name:"Demo",
            price:0,
            noOfOrders:0
        }
    ]})
    return(
        <OrderContext.Provider value={{orders,setOrders}}>
            {children}
        </OrderContext.Provider>
    )
}
