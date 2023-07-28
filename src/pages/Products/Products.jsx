import styles from "./Products.module.css"
import Product from "../../components/Product/Product"


export default function Products({products}){


    return(
        <section className={styles.products}>

            <div className={styles.container}>
                <ul className={styles.productsContainer}>
                {

                    products.map(product=>(

                        <li key={product.id} className={styles.product}>
                       <Product product={product}/>
                        </li>
                    )
                )

                }

                </ul>
            </div>


        </section>
    )


}