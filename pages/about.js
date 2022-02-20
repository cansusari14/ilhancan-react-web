import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ILHANCAN RODOPLU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>About</h1>
    </div>
  )
}