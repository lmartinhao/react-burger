import styles from './Header.module.css';
import burgerLogo from '../assets/logo.png';

export function Header() {

  return (
    <header className={styles.header}>
      <img src={burgerLogo} alt="Logotipo do React Burger" />
      <span className={styles.headerText}>React Burger</span>
    </header>
  )

}
