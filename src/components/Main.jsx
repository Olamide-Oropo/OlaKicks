import Carousel from "./Partials/Carousel";
import Article from "./Partials/Article";
import Cart from "../images/icon-cart.svg";

export default function Main(){
    return(
        <main className="flex justify-around items-center flex-grow flex-wrap gap-10">
            <Carousel />
            <Article icon={Cart}/>
        </main>
    )
}

