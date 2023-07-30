import CartItem from "../CartItem/CartItem";
import styles from "./Cart.module.css"
import { useState } from "react";

let nextItem=5;
const dummy=[
    { count:1, id:0,content:"Hair dryer",price:100,done:false},
    { count:1, id:1,content:"Dry Cleaner",price:40,done:false},
    { count:1, id:2,content:"Iron",price:55,done:false},
    { count:1, id:3,content:"Book",price:33,done:false},
    { count:1, id:4,content:"Keyboard",price:80,done:false},
]
export default function Cart({cart,onAdd,onMinus,onDelete}){

    // const [cart,setCart]=useState(dummy)


return (
    <section className={styles.cart}>

<div className={styles.container}>


<b>
 TOTAL COST {0}

</b>
    <ul className={styles.list}>
        {
            cart.map((item)=>(
                <li key={item.id} className={styles.listItem}>
        <CartItem onMinus={onMinus} onAdd={onAdd} onDelete={onDelete} item={item} />
                </li>
            ))}
        
    </ul>
<button className={styles.checkout}>Checkout</button>

</div>



    </section>
)

}