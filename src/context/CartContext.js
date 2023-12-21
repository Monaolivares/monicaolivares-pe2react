import {createContext, useState} from 'react'
import {collection, addDoc} from 'firebase/firestore'
import {db} from './../services/firebase/firebaseConfig'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState({
    buyer: {
      name: 'Jhon Doe',
      phone: '12342354234',
      email: 'jhonDoe@example.com'
    },
    items: [],
    total: 0
  })

  const [order, setOrderId] = useState(null)

  const addItem = product => {
    const {items} = cart
    const index = items.findIndex(i => i.id === product.id)

    if (index > -1) {
      items[index].quantity += 1
    } else {
      items.push({
        ...product
      })
    }

    setCart({
      ...cart,
      items,
      total: totalPrice()
    })
  }

  const removeItem = product => {
    const {items} = cart
    const index = items.findIndex(i => i.id === product.id)

    if (index > -1) {
      if (items[index].quantity > 1) {
        items[index].quantity -= 1
      }
    }

    setCart({
      ...cart,
      items
    })
  }

  const removeProduct = product => {
    const {items} = cart
    const index = items.findIndex(i => i.id === product.id)

    if (index > -1) {
      items.splice(index, 1)
    }

    setCart({
      ...cart,
      items
    })
  }

  const clearCart = cart => {
    if (cart.items.lenght === 0) return
    else setCart({...cart, items: [], total: 0})
  }

  const totalPrice = () => {
    return cart.items.reduce((acc, item) => acc + item.quantity * item.price, 0)
  }

  const sendOrder = () => {
    const ordersCollection = collection(db, 'orders')

    addDoc(ordersCollection, {...cart, date: new Date()}).then(({id}) => {
      setOrderId(id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clearCart,
        totalPrice,
        removeProduct,
        sendOrder,
        order
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
