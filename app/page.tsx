"use client";

import { ThemeProvider } from "next-themes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import styles from "./styles/Page.module.css";

export default function Home() {
  return (
    <ThemeProvider>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <p className={styles.description}>
            Hi <span className="wave">👋🏾</span> <br />
            <br />
            I&apos;m a Software Engineer (JavaScript/Python), Content Creator, Teacher, and Developer Advocate. I&apos;m
            passionate about web engineering, data, embedded systems, API documentation, composable infrastructures,
            open-source, jamstack, learning, sharing knowledge, building communities,{" "}
            <a href="https://chess.com/member/bolajiayodeji" target="_blank" rel="noopener noreferrer">
              chess
            </a>
            , and the{" "}
            <a
              href="https://www.biblegateway.com/passage/?search=1+Corinthians+15%3A1-11&version=NKJV"
              target="_blank"
              rel="noopener noreferrer"
            >
              gospel of Jesus Christ
            </a>
            . I create technical content, build{" "}
            <a href="https://github.com/BolajiAyodeji" target="_blank" rel="noopener noreferrer">
              open-source projects
            </a>
            , speak/teach at developer meetups/conferences, organize developer conferences/educational programs, and
            build technical communities.
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
              <h2>👨🏾‍🏫 Public Speaking</h2>
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

            <a href="https://www.youtube.com/c/bolajiayodeji" className={styles.card}>
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
    </ThemeProvider>
  );
}
