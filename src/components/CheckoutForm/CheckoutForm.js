import './CheckoutForm.css'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'

const CheckoutForm = () => {
  const {sendOrder, setCart, cart} = useContext(CartContext)

  const handleFormChange = e => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const name = formData.get('nombre')
    const phone = formData.get('telefono')
    const email = formData.get('email')

    setCart({
      ...cart,
      buyer: {
        name,
        phone,
        email
      }
    })
    sendOrder()
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
        </div>
      </form>
    </div>
  )
}

export default CheckoutForm
