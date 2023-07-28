import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"
export default function Navbar(){



    return(

        <div className={styles.navbar}>

            <NavLink className={styles.item} to="/cart">CART</NavLink>
            <NavLink className={styles.item} to="/products">PRODUCTS</NavLink>

        </div>
    )

}