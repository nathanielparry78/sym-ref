import Head from 'next/head'
import Nav from '../components/nav'
import { Component } from 'react'
import '../public/global-styles.css'

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SYM REF</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&family=News+Cycle:wght@400;700&display=swap" rel="stylesheet" />

      </Head>

      <Nav />
      <Component {...pageProps} />
    </>
  )
}

export default App;
