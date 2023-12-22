import style from './CartWidget.css'
import {useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import {Link} from 'react-router-dom'
import cartIcon from '../../img/cart-icon.png'
const CartWidget = () => {
  const {cart} = useContext(CartContext)

  return (
    <Link to='/cart' className={style.CartWidget}>
      <div className={style.cartIconContainer}>
        <img className='CartImg' src={cartIcon} alt='cart-widget' />
        <p className='pCartWidget'>{cart.items.length}</p>
      </div>
    </Link>
  )
}

export default CartWidget
