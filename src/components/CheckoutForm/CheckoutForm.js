import './CheckoutForm.css'
import {useContext, useState} from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'

const CheckoutForm = () => {
  const {sendOrder, setCart, order} = useContext(CartContext)
  const [viewOrder, setViewOrder] = useState(false)

  const handleFormChange = async e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('nombre')
    const phone = formData.get('telefono')
    const email = formData.get('email')

    await setCart(prevCart => ({
      ...prevCart,
      buyer: {
        name,
        phone,
        email
      }
    }))
    sendOrder()
  }

  const btnViewOrder = () => {
    setViewOrder(true)
  }

  return (
    <div className='Container'>
      <form onSubmit={e => handleFormChange(e)} className='Form'>
        <label className='Label'>
          Nombre
          <input required className='Input' type='text' name='nombre' />
        </label>
        <label className='Label'>
          Telefono
          <input required className='Input' type='phone' name='telefono' />
        </label>
        <label required className='Label'>
          Email
          <input required className='Input' type='email' name='email' />
        </label>
        <div className='Label'>
          <button type='submit' className='Button'>
            Crear Orden
          </button>
          {order !== '' && (
            <button onClick={btnViewOrder} className='Button'>
              Ver orden
            </button>
          )}
          {viewOrder && (
            <Link to={'/checkout'} className='Button'>
              Ver orden
            </Link>
          )}
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
