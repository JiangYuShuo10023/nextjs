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
          <a href="#">About Me</a>
        </h1>


        <div className={styles.grid}>
          A Student,
          <br/>
          live in china
          <br/>
          and nothing

        </div>

      </main>

      <footer className={styles.footer}>
          World.Of Darkness.
      </footer>
    </div>
  )
}
