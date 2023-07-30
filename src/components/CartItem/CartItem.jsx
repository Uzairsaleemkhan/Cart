import styles from "./CartItem.module.css"
export default function CartItem({item,onDelete,onAdd,onMinus}){

    return(
        <>
        <div className={styles.main}>

                      <input className={styles.check} type="checkbox" name="" id="" />
                    <div className={styles.itemCount}>{item.itemCount} </div>
                        <div className={styles.content}>{item.content}</div>
                        <div className={styles.price}>${item.price}</div>
                        <div className={styles.countContainer}>
                            <button onClick={_=>onAdd(item)} className={styles.plus}>+</button>
                                <div className={styles.count}>{item.count}</div>
                        <button onClick={_=>onMinus(item)} className={styles.minus}>-</button>
                        </div>
                        <button className={styles.delete} onClick={_=>{
                            onDelete(item)
                        }} >Delete</button>
        </div>      
        </>
    )

}



