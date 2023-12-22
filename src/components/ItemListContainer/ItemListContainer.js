import {useState, useEffect} from 'react'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'

import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'

//components
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({greetings}) => {
  const [products, setProducts] = useState([])
  const {categoryId} = useParams(); 
  console.log(products)

  useEffect(() => {
    let collectionRef; 
    if(categoryId){
      collectionRef =query(collection(db, 'products'), where('category', '==', categoryId)); 
    } else {
      collectionRef = query(collection(db, 'products')); 
    }

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
  }, [categoryId])

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
