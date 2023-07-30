import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Cart from "./components/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Products from "./pages/Products/Products";
const productsData = [
  { id: 0, content: "Hair dryer", price: 100, stock: 3 },
  { id: 1, content: "Dry Cleaner", price: 40, stock: 6 },
  { id: 2, content: "Iron", price: 55, stock: 9 },
  { id: 3, content: "Book", price: 33, stock: 6 },
  { id: 4, content: "Keyboard", price: 80, stock: 4 },
  { id: 5, content: "Mouse", price: 120, stock: 13 },
  { id: 6, content: "Chair", price: 280, stock: 12 },
  { id: 7, content: "Rubix Cube", price: 860, stock: 11 },
  { id: 8, content: "Chess Board", price: 25, stock: 16 },
  { id: 9, content: "Ludo", price: 45, stock: 5 },
  { id: 10, content: "Go Pro", price: 65, stock: 3 },
  { id: 11, content: "Cycle", price: 48, stock: 21 },
  { id: 12, content: "Washing Machine", price: 35, stock: 18 },
  { id: 13, content: "Pants", price: 310, stock: 17 },
  { id: 14, content: "T Shirts", price: 440, stock: 16 },
  { id: 15, content: "Shoes", price: 70, stock: 6 },
  { id: 16, content: "Pillow", price: 80, stock: 8 },
  { id: 17, content: "Door Handle", price: 90, stock: 4 },
  { id: 18, content: "Clothing", price: 100, stock: 25 },
  { id: 19, content: "Carpet", price: 140, stock: 30 },
];

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  function handleAdd(product) {
    if (cart.length > 0) {
      let goNext = false;

      let arr = cart.map((item) => {
        if (item.id === product.id) {
          goNext = true;
          return { ...item, count: item.count + 1 };
        } else {
          return item;
        }
      });
      if (goNext) {
        setCart(arr);
      } else {
        setCart([
          ...cart,
          {
            done: false,
            price: product.price,
            id: product.id,
            count: 1,
            content: product.content,
          },
        ]);
      }
    } else {
      setCart([
        {
          done: false,
          price: product.price,
          id: product.id,
          count: 1,
          content: product.content,
        },
      ]);
    }
    console.log(cart);
  }

  function handleMinus(item){
setCart(
  cart.map((cartItem)=>{
    if(cartItem.id===item.id){
      return{...cartItem,count:cartItem.count-1}
    }
    else{
      return cartItem
    }
  })
)

setCart(prev=>(
  prev.filter((cartItem)=>{

   return cartItem.count>0
  }
  )
)
)



  }


  function handleDelete(cartItem) {
    setCart(cart.filter((item) => cartItem.id !== item.id));
  }

  return (
    <>
      <div className={styles.app}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path="/products"
              exact
              element={<Products onAdd={handleAdd} products={products} />}
            />
            <Route
              path="/cart"
              exact
              element={ <Cart onMinus={handleMinus} onAdd={handleAdd} onDelete={handleDelete} cart={cart} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    
    </>
  );
}

export default App;
