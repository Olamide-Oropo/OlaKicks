import React,{useContext} from "react";
import {OrderContext,OrderType} from "../../contexts/OrderContext";
import iconDelete from "../../images/icon-delete.svg"


interface NavDialogTypes {
    isOpen:boolean
}


export default function NavDialog({isOpen}:NavDialogTypes){
    const {orders,setOrders} = useContext(OrderContext)
    const deleteOrder = (index:number) => {
        console.log(index);
    }
    const IfOrder:React.FC = () => {
        const FormmatedOrder = (orders !== undefined)?(orders.Orders.filter(order => order.Name !== "Demo")):[]
        return(
            <div>
                {
                    FormmatedOrder.map(({Name,image,noOfOrders,price},index) => (
                        <article className="flex gap-2 py-2 items-center mb-1">
                            <img className="w-8 h-8 rounded bg-cover" src={image}/>
                            <div>
                                <p className="text-xs text-gray-500 mb-1">{Name}</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-xs text-gray-500">${price}.00 x {noOfOrders}</p>
                                    <p className="font-bold text-sm">${price * noOfOrders}.00</p>
                                </div>
                            </div>
                            <button onClick={() => deleteOrder(index)}>
                                <img src={iconDelete} alt="delete icon"/>
                            </button>
                        </article>
                    ))
                }
            </div>
        )
    }
    return(
        <>
            <section className={isOpen? "dialog open-dialog":"dialog"}>
                <header className="p-2 text-left font-semibold">
                    Cart
                </header>
                <hr/>
                <section className="flex-grow px-2">
                    {
                        (orders !== undefined)?(
                            (orders.Orders.length > 1)?(
                                <>
                                    <IfOrder />
                                    <button className="actionBtn">Checkout</button>
                                </>
                            ):(
                                <p>Your cart is empty.</p>
                            )
                        ):""
                    }
                </section>
            </section>
        </>
    )
}