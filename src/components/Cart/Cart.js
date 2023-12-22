import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

//STYLES
import styles from './Cart.css'
import CheckoutForm from '../CheckoutForm/CheckoutForm'

const Cart = () => {
  const {cart, clearCart, removeItem, addItem, removeProduct} =
    useContext(CartContext)

  return (
    <>
      <div>
        {cart.items.length !== 0 ? (
          cart.items.map(item => (
            <div key={item.id} className="CartContainer">
              <div>
                <img
                  className={styles.cartImg}
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="cartBtnsCant">
                <button
                  className="CartBtn"
                  onClick={() => removeItem(item)}
                >
                  ➖
                </button>
                <p className={styles.cartPrice}>Cantidad: {item.quantity}</p>
                <button
                  className={styles.cartBtn}
                  onClick={() => addItem(item)}
                >
                  ➕
                </button>
              </div>
              <div>
                <p className={styles.cartPrice}>Precio: ${item.price}</p>
              </div>
              <div className={styles.cartPrice}>
                <p className={styles.cartPrice}>
                  SubTotal: ${item.quantity * item.price}
                </p>
              </div>
              <div>
                <button
                  className={styles.cartBtn}
                  onClick={() => removeProduct(item)}
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay items en el carrito</p>
        )}
        {cart.items.length !== 0 && <CheckoutForm />}
      </div>
      <div>
      <h2>Total: ${cart.total}</h2>
        <button onClick={() => clearCart(cart)}>Vaciar Carrito</button>
      </div>
    </>
  )
}

export default Cart
