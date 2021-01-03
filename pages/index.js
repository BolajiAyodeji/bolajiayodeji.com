import Head from "next/head";
import styles from "../styles/Home.module.css";

const metaData = {
  pageTitle:
    "Bolaji Ayodeji - Software Engineer, Content Creator & Developer Advocate",
  description:
    "Bolaji is a JAMstack Developer and Content Creator who currently works as a Developer Advocate.",
  keywords:
    "Software Engineer, Content Creator, Developer Advocate, JAMstack Developer, Community Engineer, Web Engineer, Christian, Nigeria",
  previewImage: "/social.png",
  favicon: "/favicon.png",
  twitterHandle: "@iambolajiayo",
  url: "https://bolajiayodeji.com",
  type: "website",
};

const {
  pageTitle,
  description,
  keywords,
  previewImage,
  favicon,
  twitterHandle,
  url,
  type,
} = metaData;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />
        <meta name="twitter:image" content={previewImage} />

        {/* Open Graph */}
        <meta property="og:url" content={url} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={pageTitle} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
        <meta property="og:type" content={type} key="ogtype" />

        <link
          rel="preload"
          href="/fonts/RobotoMono-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link rel="icon" href={favicon} />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>BOLAJI AYODEJI</h1>

        <p className={styles.description}>
          Hi 👋🏾 <br />
          <br />
          I'm a JAMstack Developer and Content Creator who currently works as a
          Developer Advocate at{" "}
          <a
            href="https://commercelayer.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Commerce Layer
          </a>
          . I'm passionate about sharing knowledge, documentation, web
          engineering, JAMstack, communities, and FOSS. I create technical
          content on my{" "}
          <a
            href="https://blog.bolajiayodeji.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>{" "}
          &&{" "}
          <a
            href="https://www.youtube.com/c/bolajiayodeji"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          , speak at some conferences/meetups, and build technical communities.
        </p>

        <div className={styles.grid}>
          <a href="https://blog.bolajiayodeji.com" className={styles.card}>
            <h2>✍🏾 Blog</h2>
            <p>Read my technical and non-technical articles.</p>
          </a>

          <a
            href="https://tinyletter.com/bolajiayodeji"
            className={styles.card}
          >
            <h2>💌 Newsletter</h2>
            <p>Subscribe to and read my weekly newsletter.</p>
          </a>

          <a href="https://twitter.com/iambolajiayo" className={styles.card}>
            <h2>🐦 Twitter</h2>
            <p>Follow me, interact with my tweets and maybe send a DM.</p>
          </a>

          <a
            href="https://www.youtube.com/c/bolajiayodeji"
            className={styles.card}
          >
            <h2>🎥 YouTube</h2>
            <p>Watch my videos or join my live streams (Coming soon!).</p>
          </a>

          <a href="https://github.com/BolajiAyodeji" className={styles.card}>
            <h2>👨🏾‍💻 GitHub</h2>
            <p>Checkout or contribute to my open source projects.</p>
          </a>

          <a href="https://patreon.com/bolajiayodeji" className={styles.card}>
            <h2>💰 Patreon</h2>
            <p>Become my patron and $upport my work.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        &copy; Bolaji Ayodeji | 2019 - Today.
      </footer>
    </div>
  );
}
