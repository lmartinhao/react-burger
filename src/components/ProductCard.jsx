import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import styles from './ProductCard.module.css';

import addToCart from '../assets/add-to-basket.png';
import removeFromCart from '../assets/remove-from-cart.png';

function ProcuctCard(props) {
  const [count, setCount] = useState(0);

  function funcAdicionar(event) {
    event.preventDefault();
    setCount((count) => {
      return count + 1
    });
  };

  function funcRemover(event) {
    if (count > 0) {
      event.preventDefault();

      setCount((count) => {
        return count - 1
      });
    }
    else {
      event.preventDefault();
      alert('Você não tem nenhum item deste tipo adicionado');
    }
  };

  return (
    <Card className={styles.productCard} style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className={styles.productTitle}>{props.name}</Card.Title>
        <Card.Img className={styles.productPic} variant="top" src={props.pic} />
        <Card.Text className={styles.priceText}>
          R${props.price}
        </Card.Text>
        <div className={styles.cart}>
          <a href='#' onClick={funcAdicionar}><img src={addToCart} alt='Adicionar ao carrinho' /></a>
          <a href='#' onClick={funcRemover}><img src={removeFromCart} alt='Remover do carrinho' /></a>
        </div>
        <span className={styles.myItems}>{count}</span>
      </Card.Body>
    </Card>
  );
}

export default ProcuctCard
