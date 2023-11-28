const products = [
    //barra humectante
    {
        id: "1", 
        name:"Barra Humectante",
        price: 5000,
        category: "cosmetica natural",
        img:"../../img/barra-humectante.jpeg",
        stock:20,
        description:"Barra solida a base de aceites naturales para hidratar la piel.", 
    },
    // oleo lunar
    {
        id: "2", 
        name: "Oleo lunar",
        price: 9000,
        category: "cosmetica natural",
        img: "./img/oleo-lunar.jpeg",
        stock: 30, 
        description: "Preparado artesanal a base de aceites de origen local para hidratar el rostro, uso nocturno.", 
    },
    // scrunchies
    {
        id: "3", 
        name: "Scrunchies",
        price: 5000,
        category: "textiles",
        img: "./img/scrunchies.jpeg",
        stock: 25,
        description: "Scrunchie a base de seda, tenido con tinturas vegetales, hecho a mano. No hay dos acabados iguales", 
    },
    // licor del bosque.
    {
        id: "4", 
        name: "Licor del bosque",
        price: 6000,
        category: "licores",
        img: "./img/licor.jpeg",
        stock: 15,
        description: "Licor a base de frutos del bosque, de recoleccion local, manufactura artesanal.", 
    },

]

export const getProducts = ()=>{
    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(products)

        }, 500)
})
}

export const getProductsById = (productId) => {
    return new Promise ((resolve)=>{
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    }
    )
}

export const getProductbyCategory = (categoryId) => {

    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products.filter( prod=>prod.category === categoryId))
        }, 500)
    })
}