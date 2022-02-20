import styles from './Navigation.module.css'
export default function Navigation() {
    return (
      <div className={styles.navigation}>
        <a href="/about">About</a><br />
        <a href="/song">Work</a>
      </div>
      
    )
  }