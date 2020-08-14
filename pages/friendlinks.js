import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FatManDJ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="#">My Friends</a>
        </h1>


        <div className={styles.grid}>
          <a href="https://cnblogs.com/blog-xhg78999">XHG78999</a>
          <br/>
        </div>

      </main>

      <footer className={styles.footer}>
          World.Of Darkness.
      </footer>
    </div>
  )
}
