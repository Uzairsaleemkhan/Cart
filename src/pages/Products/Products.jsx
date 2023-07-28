import styles from "./Products.module.css"
import Product from "../../components/Product/Product"


export default function Products({products,onAdd}){


    return(
        <section className={styles.products}>

            <div className={styles.container}>
                <ul className={styles.productsContainer}>
                {

                    products.map(product=>(

                        <li key={product.id} className={styles.product}>
                       <Product product={product} onAdd={onAdd}/>
                        </li>
                    )
                )

                }

                </ul>
            </div>


        </section>
    )


}