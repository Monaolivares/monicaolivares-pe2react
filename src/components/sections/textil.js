import {useEffect, useState} from 'react'
import {db} from '../../services/firebase/firebaseConfig'
import {collection, getDocs, query, where} from 'firebase/firestore'

const Textil = () => {
  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(() => {
    const q = query(
      collection(db, 'products'),
      where('category', '==', 'textil')
    )

    getDocs(q)
      .then(response => {
        setProducts(
          response.docs.map(doc => {
            return doc.data()
          })
        )
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <div>
        {products !== undefined ? (
          products.map(product => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.img} alt='' />
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export default Textil
