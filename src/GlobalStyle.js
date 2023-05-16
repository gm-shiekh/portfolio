import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`



* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* font-family: "Work Sans", sans-serif; */
  
}


html {
  font-size: 62.5%;
  
  scroll-behavior: smooth;
  /* 1rem = 10px */
  overflow-x: hidden;

}

body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
    /* background-color: #222222; */
}

body::-webkit-scrollbar {
  width: 1.5rem;
}

body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}

body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}

h1,
h2,
h3,
h4 {
   /* font-family: "Work Sans", sans-serif; */

}

h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 4rem;
  /* font-weight: 900; */
}

 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}


${"" /* resuable code section  */}

.container {
  max-width: 80rem;
  margin: 0 auto;
}

.grid {
  display: grid;
  gap: 0rem;
}

.grid-two-column {
  grid-template-columns: repeat(2, 1fr);

}

.grid-column-2{
  grid-template-columns: 1fr 2fr;
}

.grid-three-column {
  grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
   grid-template-columns: 1fr 1.2fr .5fr .8fr ;
}

.grid-five-column{
  grid-template-columns: repeat(5, 1fr);
}

  .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
    }

     .intro-data {
      margin-bottom: 0;
      text-transform: uppercase;
      color: #eb2872;
    }

   .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }

input, textarea{
    /* max-width: 50rem; */
    color: ${({ theme }) => theme.colors.black};
    padding: 1.6rem 2.4rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    
   box-shadow: ${({ theme }) => theme.colors.shadowSupport};
   
}

input{
  border-radius: 100px;
  width: 37rem;
  
}

textarea{
  border-radius: 30px;
  /* display: block; */
  resize: vertical;
  font-family: Arial;
  /* width: 80rem; */
  /* height: 20vh; */
  
}
   

@media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
    max-width: 130rem;
    padding: 0 3.2rem;
  }
  }

   @media (max-width: ${({ theme }) => theme.media.mobile}) {
       html {
      font-size: 60%;
    }

.grid{
  gap: 3.2rem;
}
      .grid-two-column , .grid-three-column, .grid-column-2, .grid-four-column{
          grid-template-columns: 1fr;
        }
    }

`;
