import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './ProductCard.module.css';

import addToCart from '../assets/add-to-basket.png';
import removeFromCart from '../assets/remove-from-cart.png';

function ProcuctCard(props) {

  return (
    <Card className={styles.productCard} style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title className={styles.productTitle}>{props.name}</Card.Title>
        <Card.Img className={styles.productPic} variant="top" src={props.pic} />
        <Card.Text className={styles.priceText}>
          R${props.price}
        </Card.Text>
        <div className={styles.cart}>
          <a href='#'><img src={addToCart} alt='Adicionar ao carrinho' /></a>
          <a href='#'><img src={removeFromCart} alt='Remover do carrinho' /></a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProcuctCard


/* button com quantidade (adicionar e remover)
state hook
*/
