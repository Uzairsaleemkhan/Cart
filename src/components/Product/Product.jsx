import styles from "./Product.module.css";
export default function Product ({product,onAdd}){




    return (
        <>
                 <div className={styles.content}>{product.content}</div>
                            <div className={styles.price}>
                                ${product.price}  
                            </div>
                            <div className={styles.stock} style={product.stock>0?{color:"green"}:{color:"red"}}>{
                                product.stock>0?"In Stock":"Out of Stock"
                            }</div>
                            <button onClick={()=>{
                                onAdd(product)
                            }} className={styles.button}>Add To Cart</button>
        </>
    )
}