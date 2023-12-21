//STYLES SHEET
import './Item.css'

const Item = ({product}) => {
  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'> {product.name} </h2>
      </header>
      <picture>
        <img src={product.img} alt={product.name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>Precio: ${product.price}</p>
        <p className='Info'>Stock disponible: {product.stock}</p>
      </section>
    </article>
  )
}

export default Item
