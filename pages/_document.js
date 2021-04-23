import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="/__/firebase/8.4.1/firebase-app.js"></script>
          <script src="/__/firebase/8.4.1/firebase-analytics.js"></script>
          <script src="/__/firebase/init.js"></script>
          <script src="noflash.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
