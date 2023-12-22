import {useState, useEffect, useContext} from 'react'
import {collection, getDocs, query} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import styles from './ItemDetailContainer.css'
import {useParams} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'



const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const itemId = useParams()
  const {addItem} = useContext(CartContext)

  useEffect(() => {
    const collectionRef = query(collection(db, 'products'))

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          return doc.data()
        })
        setProduct(productsAdapted)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      {product && product
          .filter(prod => prod.id === itemId.itemId)
          .map(prod => (
            <div key={prod.id} className="CardItemContainer">
              <div className='Header'>
                <h2 className='ItemHeader'>{prod.name}</h2>
              </div>

              <div>
                <img src={prod.img} alt={prod.name} className='ItemImg'></img>
              </div>

              <div className={styles.Info}>
                <p className='Info'>Categoria: {prod.category}</p>
                <p className='Info'>Descripcion: {prod.description}</p>
                <p className='Info'>Precio: ${prod.price}</p>
                <button
                  className={styles.buttonAdd}
                  onClick={() => addItem(prod)}
                >
                  Agregar al Carrito
                </button>
              </div>
            </div>
          ))}
    </div>
  )
}

export default ItemDetailContainer
