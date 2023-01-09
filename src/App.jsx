import { products } from "./products.json";
import ProcuctCard from './components/ProductCard'
import { Header } from "./components/Header";

import styles from './App.module.css';

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        {products.map((product) =>
        <ProcuctCard
          key={product.id}
          name={product.name}
          price={product.price}
          pic={product.url}
        />)}
      </div>

    </div>
  )
}

export default App
