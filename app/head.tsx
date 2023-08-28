const metaData = {
  pageTitle: "Bolaji Ayodeji — Software Engineer, Content Creator, Teacher, and Developer Advocate.",
  description:
    "Bolaji is an innovative technology professional with progressive IT, web engineering, data, embedded systems, developer relations, documentation, technical writing, open-source, community building, and entrepreneurship experience in for-profit startups and non-profit technology and education organizations.",
  keywords:
    "Software Engineer, Data Engineer, Content Creator, Developer Advocate, Developer Educator, Jamstack Developer, Community Engineer, Web Engineer, Christian, Nigeria, Africa",
  previewImage: "/social.png",
  favicon: "/favicon.png",
  twitterHandle: "@iambolajiayo",
  url: "https://bolajiayodeji.com",
  type: "website"
};

const { pageTitle, description, keywords, previewImage, favicon, twitterHandle, url, type } = metaData;

export default function Head() {
  return (
    <>
      <title>{pageTitle}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" content={url} key="ogurl" />
      <meta property="og:image" content={previewImage} key="ogimage" />
      <meta property="og:site_name" content={pageTitle} key="ogsitename" />
      <meta property="og:title" content={pageTitle} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <meta property="og:type" content={type} key="ogtype" />
      <meta name="twitter:card" content="summary_large_image" key="twcard" />
      <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

      <link rel="preload" href="/fonts/IBMPlexSans-Regular.ttf" as="font" crossOrigin="" />
      <link rel="icon" href={favicon} />
    </>
  );
}
