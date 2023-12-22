import {db} from '../../services/firebase/firebaseConfig'
import {useContext, useState, useEffect} from 'react'
import {doc, getDoc} from 'firebase/firestore'
import {CartContext} from '../../context/CartContext'
import styles from './Checkout.css'

const Checkout = () => {
  const {order} = useContext(CartContext)
  console.log(order)
  const [orderUser, setOrderUser] = useState(null)
  console.log(orderUser)

  useEffect(() => {
    const brief = doc(db, 'orders', order)

    getDoc(brief).then(res => {
      if (!res.empty) {
        setOrderUser({id: res.id, ...res.data()})
        console.log(res)
      }
    })
  }, [order])

  return (
    <div className={styles.mainContainer}>
      {orderUser !== null ? (
        <div className={styles.checkOutContainer}>
          <div className={styles.checkOutInfo}>
            <h2>Detalles de la orden</h2>
            <p>Orden: {orderUser.id}</p>

            <p>Nombre: {orderUser.buyer.name}</p>
            <p>Telefono: {orderUser.buyer.phone}</p>
            <p>Email: {orderUser.buyer.email}</p>
            <p>Total: {orderUser.total}</p>
          </div>

          <div className={styles.checkOutItems}>
            <h2>Productos</h2>
            {orderUser.items.map((item, index) => (
              <div key={index}>
                <p>Nombre: {item.name}</p>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No hay ordenes</p>
      )}
    </div>
  )
}

export default Checkout
