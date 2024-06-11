import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import {navItemTypes} from "../types/App-types"

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
    return(
        <header>
            <nav>
                <h2>Sneakers</h2>
                <ul>
                    {
                        navItems.map((item) => {
                            return(
                                <a href={item.url}>
                                    <li className="text-base">{item.name}</li>
                                </a>
                            )
                        })
                    }
                </ul>
            </nav>
            <div>
                <img src={cart} alt="cart"/>
                <img src={avatar} alt="avater"/>
                <section role="dialog">
                    <header>
                        Cart
                    </header>
                    <section>
                        Your cart is empty.
                    </section>
                </section>
            </div>
        </header>
    )
}