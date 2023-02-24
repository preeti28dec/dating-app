import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>We meet</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon.png' />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name='theme-color' content='#fff' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
