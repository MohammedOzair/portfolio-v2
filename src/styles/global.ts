import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Sacramento&display=swap');

html.lenis {
  scroll-behavior: auto !important;
}


@font-face {
  font-family: 'Sacramento';
  src: url('/fonts/Sacramento/Sacramento-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

  @font-face {
    font-family: 'InputMono';
    src: url('/fonts/InputMono/InputMono-Regular.woff2') format('woff2'),
         url('/fonts/InputMono/InputMono-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  :root{
    --pink: #E31F71;
    --header-fixed: #212121;
    --green: #23ce6b;
    --blue: #016fb9;
    scroll-padding-top: 10rem;

    &.light{

      body{
        transition: 0.5s;
        background-color: #f5f5f5;
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }

  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: black;
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: "Poppins", "Poppins Placeholder", sans-serif;;
    font-weight: 400;
    line-height: -0.04em;
    text-align: justify;
  }

  body.dark {
  background-color: #000000ff;
}

body.dark .App {
  background-color: #000000ff;
}

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
    &:hover{
      filter: brightness(0.8);
    }
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    color: #FFFF;
    // &::first-letter{
    //   color: var(--green);
    // }
  }
`;
