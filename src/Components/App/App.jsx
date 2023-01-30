import Product from "../Product/product";
import { useState } from "react";
import DataBase from "../DataBase/dataBase";
import AddProduct from "../AddProduct/addProduct";

function App() {
  const productsArr = [
    { id: 1, title: "Iphone", price: 200, count: 10 },
    { id: 2, title: "Samsung", price: 250, count: 8 },
    { id: 3, title: "Xiaomi", price: 150, count: 6 },
    { id: 4, title: "Sony", price: 300, count: 5 },
    { id: 5, title: "Lg", price: 170, count: 7 },
  ];

  const [products, setProducts] = useState(productsArr);

  const addProduct = (productId, value) => {
    const newProduct = products.map((product) => {
      product.count =
        // product.id === productId ? product.count + value : product.count;
        product.id === productId
          ? product.count + value < 0
            ? (product.count = 0)
            : product.count + value
          : product.count;

      return product;
    });
    setProducts(newProduct);
  };

  const summaCount = products.reduce((acc, elem) => acc + elem.count, 0);

  const priceProducts = products.reduce(
    (acc, elem) => acc + elem.price * elem.count,
    0
  );

  const createProduct = (title, price, count) => {
    price = +price;
    count = +count;
    const newProduct = {
      id: Date.now(),
      title,
      price,
      count,
    };

    const data = [...products, newProduct];
    console.log(data);
    setProducts(data);
  };

  return (
    <div>
      <>
        <AddProduct createProduct={createProduct} />
      </>
      <div>
        {products.map((product) => (
          <Product
            key={product.id}
            {...product}
            addProduct={addProduct}
            // a={a}
          />
        ))}
      </div>
      <>
        <DataBase summaCount={summaCount} priceProducts={priceProducts} />
      </>
    </div>
  );
}

export default App;
