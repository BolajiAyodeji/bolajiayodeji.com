import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Bolaji Ayodeji - Software Engineer, Content Creator & Developer
          Advocate
        </title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Coming Soon!</h1>

        <p className={styles.description}>
          Bolaji is a JAMstack Developer and Content Creator who currently works
          as a Developer Advocate at{" "}
          <a href="https://commercelayer.io" target="_blank" rel="noopener noreferrer">
            Commerce Layer
          </a>
          . He's passionate about sharing knowledge, documentation, web
          engineering, JAMstack, communities, and FOSS. He creates technical
          content on his <a href="https://blog.bolajiayodeji.com" target="_blank" rel="noopener noreferrer">Blog</a> &&{" "}
          <a href="https://www.youtube.com/c/bolajiayodeji" target="_blank" rel="noopener noreferrer">YouTube</a>, speak
          at some conferences/meetups and build technical communities.
        </p>

        <div className={styles.grid}>
          <a href="https://blog.bolajiayodeji.com" className={styles.card}>
            <h3>✍🏾 Blog</h3>
            <p>
              Read web engineering, JAMstack, productivity and random articles.
            </p>
          </a>

          <a href="https://github.com/BolajiAyodeji" className={styles.card}>
            <h3>👨🏾‍💻 GitHub</h3>
            <p>Checkout or contribute to my open source projects.</p>
          </a>

          <a href="https://twitter.com/iambolajiayo" className={styles.card}>
            <h3>🐦 Twitter</h3>
            <p>Follow me, interact with my tweets and maybe send a DM.</p>
          </a>

          <a href="https://patreon.com/bolajiayodeji" className={styles.card}>
            <h3>💰 Patreon</h3>
            <p>Become my patron and $upport my work.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
          © 2018 - Today | Copyright Bolaji Ayodeji.
      </footer>
    </div>
  );
}
