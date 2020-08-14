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
          <code className={styles.code}>Eating</code>{' '}
          <a href="/about">About Me</a>{' '}
          World.Of Darkness
        </p>

        <div className={styles.grid}>
          <a href="https://blog.fatdev.name" className={styles.card}>
            <h3>My Blog</h3>
            <p>Using Hexo</p>
          </a>

          <a href="https://github.com/JiangYuShuo10023" className={styles.card}>
            <h3>GitHub</h3>
            <p>See Programs</p>
          </a>

          <a
            href="https://algores.now.sh"
            className={styles.card}
          >
            <h3>AlgoRes</h3>
            <p>A Resource Site</p>
          </a>

          <a
            href="https://fs.fatdev.name"
            className={styles.card}
          >
            <h3>FlaskStatic</h3>
            <p>
              Simplae Site Gnerator
            </p>
          </a>
        </div>

      </main>

      <footer className={styles.footer}>
          World.Of Darkness.
          <a href="https://github.com/JiangYuShuo10023/">GitHub</a>
      </footer>
    </div>
  )
}
