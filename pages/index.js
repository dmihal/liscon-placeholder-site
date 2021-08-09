import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>LisCon</title>
        <meta name="description" content="Lisbon's first Ethereum conference" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero} />

        <h1 className={styles.title}>
          LisCon 2021
        </h1>

        <p className={styles.description}>
          Oct 20-21
          <br />
          Lisbon, PT
        </p>
      </main>
    </div>
  );
}
