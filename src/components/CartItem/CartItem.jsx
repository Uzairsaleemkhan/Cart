import styles from "./CartItem.module.css"
export default function CartItem({item,onDelete}){




    return(
        <>
        <div className={styles.main}>

                      <input className={styles.check} type="checkbox" name="" id="" />
                    <div className={styles.itemCount}>{item.itemCount} </div>
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.countContainer}>
                        <div className={styles.price}>${item.price}</div>
                            <button className={styles.plus}>+</button>
                                <div className={styles.count}>{item.count}</div>
                            <button className={styles.minus}>-</button>
                        </div>
                        <button className={styles.delete} onClick={_=>{
                            onDelete(item)
                        }} >Delete</button>
        </div>      
        </>
    )

}



