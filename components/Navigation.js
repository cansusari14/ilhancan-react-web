import styles from './Navigation.module.css'
import Link from 'next/link'
export default function Navigation() {
    return (
      <div className={styles.navigation}>
        <Link href="/about">
        <a>ABOUT</a>
        </Link>
        <Link href="/song">
        <a >WORK</a>
        </Link>
      </div>
      
    )
  }