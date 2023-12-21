import {useState, useEffect} from 'react'
import './ItemListContainer.css'

import {getDocs, collection, query} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

//components
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greetings}) => {
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    const collectionRef = query(collection(db, 'products'))

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          return doc.data()
        })
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div>
      <h1>{greetings}</h1>
      <section>
        <ItemList products={products} />
      </section>
    </div>
  )
}

export default ItemListContainer
