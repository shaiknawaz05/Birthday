import React from 'react'
import TitleMessage from "./components/title/title.component"
import './App.css'
import Carousel from "./components/carousel/carousel.component";
import Invitation from "./pages/invitation/invitation.component";
import Particles from "react-particles-js";
import { particlesoptions } from "./particlesoptions";
import Fade from 'react-reveal/Fade'
import Container  from "react-bootstrap/Container";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Carousel />
      <TitleMessage />
      
      <Particles
        className="particles particles-box"
        params={particlesoptions}
          />
          <div>
            <Container className="container-box rounded">
            <Fade duration={100}>
            <Invitation/>
            </Fade>
          </Container>
          </div>  
          

    </div>
  )
}

export default App
