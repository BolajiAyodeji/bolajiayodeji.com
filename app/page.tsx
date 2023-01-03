import styles from "./styles/Home.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Header />
        <p className={styles.description}>
          Hi <span className="wave">👋🏾</span> <br />
          <br />
          I'm a Software Engineer, Content Creator, and Developer Advocate who
          currently works at{" "}
          <a
            href="https://commercelayer.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commerce Layer
          </a>
          . I'm passionate about web engineering, data, embedded systems,
          documentation, Jamstack, headless commerce, composable
          infrastructures, learning, sharing knowledge, teaching, building
          communities, open-source, and the{" "}
          <a
            href="https://www.biblegateway.com/passage/?search=1+Corinthians+15%3A1-11&version=NKJV"
            target="_blank"
            rel="noopener noreferrer"
          >
            gospel of Jesus Christ
          </a>
          . I create technical content, build some{" "}
          <a
            href="https://github.com/BolajiAyodeji"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source projects
          </a>
          , speak at some meetups/conferences, and build technical communities.
        </p>

        <div className={styles.grid}>
          <a href="https://blog.bolajiayodeji.com" className={styles.card}>
            <h2>✍🏾 Blog</h2>
            <p>Read my technical and non-technical articles.</p>
          </a>

          <a href="https://bawd.bolajiayodeji.com" className={styles.card}>
            <h2>💌 Newsletter</h2>
            <p>Subscribe to and read my weekly newsletter.</p>
          </a>

          <a href="https://slides.com/bolajiayodeji" className={styles.card}>
            <h2>👨🏾‍🏫  Public Speaking</h2>
            <p>Explore my talks and workshops (detailed page coming soon!).</p>
          </a>

          <a href="https://github.com/BolajiAyodeji" className={styles.card}>
            <h2>👨🏾‍💻 GitHub</h2>
            <p>Check out or contribute to my open source projects.</p>
          </a>

          <a href="https://twitter.com/iambolajiayo" className={styles.card}>
            <h2>🐦 Twitter</h2>
            <p>Follow me, interact with my tweets, and maybe send a DM.</p>
          </a>

          <a href="https://linkedin.com/in/iambolajiayo" className={styles.card}>
            <h2>💙 LinkedIn</h2>
            <p>Explore my professional network and maybe send a DM.</p>
          </a>

          <a
            href="https://www.youtube.com/c/bolajiayodeji"
            className={styles.card}
          >
            <h2>🎥 YouTube</h2>
            <p>Watch my videos or join my live streams (coming soon!).</p>
          </a>

          <a href="https://patreon.com/bolajiayodeji" className={styles.card}>
            <h2>💰 Patreon</h2>
            <p>Become my patron, encourage me, and $upport my work.</p>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
