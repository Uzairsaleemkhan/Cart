import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
export default function Navbar(){



    return(

        <div className={styles.navbar}>

            <NavLink to="/cart">CART</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>

        </div>
    )

}