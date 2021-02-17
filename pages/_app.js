import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Head from 'next/head';
import db from '../db.json';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  #nomeuser::placeholder, .titlep{color:#fff}
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  h2{
    text-align: center;
    color:#000;
  }
  p{ text-align:left; margin-left:15px; color:#000}
  .line-1{
    position: relative;
    top: 50%;  
    width: 24em;
    margin-left : 15px;
    border-right: 2px solid rgba(255,255,255,.75);
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%);    
  }

  /* Animation */
  .anim-typewriter{
    animation: typewriter 4s steps(44) 2s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  .anim-typewriter2{
    animation: typewriter 4s steps(44) 5s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  .anim-typewriter3{
    animation: typewriter 4s steps(44) 7s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  .anim-typewriter4{
    animation: typewriter 4s steps(44) 9s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  .anim-typewriter5{
    animation: typewriter 4s steps(44) 12s 1 normal both,
              blinkTextCursor 500ms steps(44) infinite normal;
  }
  @keyframes typewriter{
    from{width: 0;}
    to{width: 24em;}
  }
  
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }
  
  .gifsusto{margin: 15px auto; display:block; width: 60vw}
  .gif img{ margin-top:14px; display:block; margin: 0 auto}
  .gif button{width: 180px; border-radius:50px; margin:20px auto; display: block; transition: all ease-in-out .5s}
  .gif button:hover{color: #8c19bb; background-color:#fff;opacity:1;}
`;



const { theme } = db;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
