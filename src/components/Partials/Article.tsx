import CartIcon from "./CartIcon";
import { useEffect, useState,useContext } from "react";
import { OrderType,OrderContext } from "../../contexts/OrderContext";
import SneakerImg from "../../images/image-product-1.jpg"


interface ArticlePropsType{
    icon:string
}

export default function Article({icon}:ArticlePropsType){
    const [numOfOrders,setNumOfOrders] = useState(0);
    const ContextInfo = useContext(OrderContext);
    const addOrder = () => {
        if(numOfOrders === TotalStock){
            return ""
        }else{
            setNumOfOrders(numOfOrders + 1)
        }
    }
    const subtractOrder = () => {
        if(numOfOrders !== 0){
            setNumOfOrders(numOfOrders - 1)
        }
    }
    const TotalStock = 10;
    const SneakerName = "Fall Limited Edition Sneakers";
    const SneakerImage = SneakerImg;
    const SneakerPrice = 125.00;
    const noOfOrders = numOfOrders;

    const currentOrder:OrderType = {
        image:SneakerImage,
        Name: SneakerName,
        noOfOrders:noOfOrders,
        price:SneakerPrice
    }
    const SubmitOrder = () => {
            if(noOfOrders !== 0){
                if(ContextInfo.setOrders !== undefined){
                    var ExistingOrders
                    if(ContextInfo.orders !== undefined){
                        ExistingOrders = ContextInfo.orders.Orders
                        ContextInfo.setOrders({Orders:[...ExistingOrders,currentOrder]})
                    }
                }
            }
        console.log(ContextInfo)
    }
    return(
        <section className="flex flex-col w-96 md:w-80 gap-5">
            <h1 className="uppercase tracking-wide text-customOrange">Sneaker Company</h1>
            <h2 className="capitalize text-3xl font-extrabold">{SneakerName}</h2>
            <p className="font-light text-sm text-gray-500">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>
            {/* Would have used custom reusable classes here but since thi is a one time widget hard coding is more efficient */}
            <section className="flex gap-3 items-start">
                <div>
                    <p className="font-bold text-xl">${SneakerPrice}.00</p>
                    <p className="line-through text-gray-400 text-sm">$250.00</p>
                </div>
                <div className="px-1 py-1 rounded bg-paleOrange">
                    <p className="text-customOrange text-sm font-bold">50%</p>
                </div>
            </section>
        	<section className="flex gap-3">
                <div className="flex w-36 py-2 rounded-lg bg-gray-100 justify-around items-center">
                    <button className="calcBtn" onClick={subtractOrder}>-</button>
                    <p className="font-bold">{numOfOrders}</p>
                    <button className="calcBtn" onClick={addOrder}>+</button>
                </div>
                <button className="actionBtn gap-2" onClick={SubmitOrder} disabled={(ContextInfo.orders !== undefined)?(ContextInfo.orders.Orders.length == 2):false}>
                    <CartIcon hex="#ffffff"/>
                    <p>Add to cart</p>
                </button>
            </section>
        </section>
    )
}