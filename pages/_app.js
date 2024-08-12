import Head from "next/head";
import "/styles/style.css";

function App({ Component, pageProps }) {
  return (
    (<html lang="pt-br" />),
    (
      <>
        <Head>
          <title>Olá! 🤓</title>
        </Head>
        <Component {...pageProps} />
      </>
    )
  );
}

export default App;
