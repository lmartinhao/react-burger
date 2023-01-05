import { products } from "./products.json";
import './App.css'
import ProcuctCard from './ProductCard'

function App() {
  console.log(products)

  return (
    <div className="App">
      <h2>Produtos</h2>

      {products.map((product) => <ProcuctCard name={product.name} price={product.price} />)}

    </div>
  )
}

export default App
