import Head from 'next/head'
import Nav from '../components/nav'
import styled from 'styled-components'
import { Component } from 'react'


// const GlobalStyles = createGlobalStyle`
// 	@import url('https://fonts.googleapis.com/css?family=News+Cycle:400,700&display=swap');
// 	@import url('https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap');

// 	body {

//   }
// `

const GlobalStyles = styled.div`
  font-family: 'News Cycle', sans-serif;
  line-height: 1.4;
  padding: 1rem;
  background: #222;
`

function App({ Component, pageProps }) {
  return (

    <>
      <GlobalStyles>
      <Head>
        <title>SYM REF</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=IM+Fell+Great+Primer+SC&family=News+Cycle:wght@400;700&display=swap" rel="stylesheet" />

      </Head>

        <Nav />
        <Component {...pageProps} />
      </GlobalStyles>
    </>

  )
}

export default App;
