import {Link} from 'react-router-dom'
//COMPONENTS
import Item from '../Item/Item'
//STYLES
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='ListaProductos'>
      {products.map(prod => (
        <Link to={`/item/${prod.id}`} key={prod.id}>
          <Item key={prod.id} product={prod} />
        </Link>
      ))}
    </div>
  )
}

export default ItemList
