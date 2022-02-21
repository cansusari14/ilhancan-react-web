import styles from './Navigation.module.css'
export default function Navigation() {
    return (
      <div className={styles.navigation}>
        <a href="/about">ABOUT</a><br />
        <a href="/song">WORK</a>
      </div>
      
    )
  }