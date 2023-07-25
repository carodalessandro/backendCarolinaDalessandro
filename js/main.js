class ProductManager {
  constructor() {
    this.products = [];
  }
  
  
  addProduct(title, description, price, thumbnail, code, stock) {
    if (title === " "|| description === " "|| price === " "||thumbnail === " "|| code === " "||stock === " "){
      console.log("complete todos los campos");
  } else if(this.products.some((product)=>product.code === code)){
      console.log("el código ya se encuentra cargado");
  }else{
    this.products.push({
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    })
  }
  let id = 1;
  if (addProduct) {
    id = id + 1;
    id.unshift(products);
  }
  
  //agregará un producto al arreglo
  //validar que no se repita el campo "code" y que todos los campos sean obligatorios
  //al agregarlo crear un id autoincrementable
}

getProducts() {
  //devuelve el arreglo con todos los productos creados hasta ese momento
  console.log (this.products);
}

  getProductById(products, id) {
    for (let i = 0; i < products.length; i++) {
      products.id.find(id);
      if (products.id !== id) {
        console.log( "Not found");
      }
    }
    //debe buscar en el arreglo el producto que coincida con el ID,
    //en caso de no coincidir ningun id, mostrar en consola "Not found"
  }
}

const producto = new ProductManager()

producto.addProduct("producto1", "alfajor chocolate con dulce de leche", 500, "imagen no disponible", 267, 31)