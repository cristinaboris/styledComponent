import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import Navbar from './components/navbar/Navbar'
import { Hero } from './components/hero/Hero';
import {Infobox} from './components/infobox/Infobox'
import {InfoSection} from './components/InfoSection/InfoSection'
import {InfoSectionTwo} from './components/InfoSectionTwo/InfoSectionTwo'
import {InfoSectionThree} from './components/InfoSectionThree/InfoSectionThree'
import Team from './components/team/Team'
import {InfoSectionFour} from './components/InfoSectionFour/InfoSectionFour'
import Blogs from './components/blogs/Blogs'
import {Footer} from './components/footer/Footer'

const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
}
body{
  box-sizing: border-box;
  background-color: white;
  @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
  *{
    font-family: 'Roboto', sans-serif;
  }
}
`;

const Container = styled.div`
background-color: white;
height: 100vh;


`
const theme = {
  colors:{
    primary: 'darkBlue',
    secondary: 'tomato',
    light: 'black',
    text: 'snow',
    textDark: 'gray',
    bgDefault: 'white',
    bgPrimary: 'darkBlue',
    bgSecondary: 'darkBlue',
    bgLight: 'aliceBlue'
  }
}

function App() {
  

  return (
    <>
  <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <Container>   
      <Navbar/>
      <Hero/>
      <Infobox/>
      <InfoSection/>
      <InfoSectionTwo/>
      <InfoSectionThree/>
      <InfoSectionFour/>
      <Team/>
      <Blogs/>
      <Footer/>
      </Container>
      </ThemeProvider>
  
 
 </>
    )
}

export default App
