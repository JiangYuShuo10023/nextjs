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
          <a href="https://blog.fatdev.name">FatManDJ</a>
        </h1>

        <p className={styles.description}>
          A Student,Like{' '}
          <code className={styles.code}>Eating</code>{' '},
          <a href="/about">About Me</a>,
          <a href="https://github.com/JiangYuShuo10023">GitHub</a>
        </p>

        <div className={styles.grid}>
          <h1>Friend Links</h1>
          <br/>
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