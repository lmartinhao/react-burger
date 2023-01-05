import styles from './Header.module.css';
import burgerLogo from '../../public/logo.png';

export function Header() {

  return (
    <header className={styles.header}>
      <img src={burgerLogo} alt="Logotipo do Ignite" />
      <span className={styles.headerText}>React Burger</span>
    </header>
  )

}
