import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          {/* Favicons */}
          <link type="image/x-icon" rel="shortcut icon" href="/favicon/favicon.ico" />

          <link type="image/png" sizes="16x16" rel="icon" href="/favicon/favicon-16x16.png" />
          <link type="image/png" sizes="32x32" rel="icon" href="/favicon/favicon-32x32.png" />
          <link type="image/png" sizes="96x96" rel="icon" href="/favicon/favicon-96x96.png" />
          <link type="image/png" sizes="120x120" rel="icon" href="/favicon/favicon-120x120.png" />

          <link sizes="57x57" rel="apple-touch-icon" href="/favicon/favicon-57x57.png" />
          <link sizes="60x60" rel="apple-touch-icon" href="/favicon/favicon-60x60.png" />
          <link sizes="72x72" rel="apple-touch-icon" href="/favicon/favicon-72x72.png" />
          <link sizes="76x76" rel="apple-touch-icon" href="/favicon/favicon-76x76.png" />
          <link sizes="114x114" rel="apple-touch-icon" href="/favicon/favicon-114x114.png" />
          <link sizes="120x120" rel="apple-touch-icon" href="/favicon/favicon-120x120.png" />
          <link sizes="144x144" rel="apple-touch-icon" href="/favicon/favicon-144x144.png" />
          <link sizes="152x152" rel="apple-touch-icon" href="/favicon/favicon-152x152.png" />
          <link sizes="180x180" rel="apple-touch-icon" href="/favicon/favicon-180x180.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          {/* <meta name="robots" content="index, follow" /> */}
          {/* <meta name="theme-color" content="#000000" /> */}
          {/* <meta name="author" content="Иван Иванович" /> */}
          {/* <meta name="copyright" lang="ru" content="ООО Ромашка" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}