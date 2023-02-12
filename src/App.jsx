import React from 'react';
import Toolbar from "./components/toolbar/toolbar";
import './App.css';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'animate.css';

function App() {
  return (
    <ParallaxProvider>
      <div className="app">
        <Toolbar />
        <Home />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
        <hr />
        <Footer />
      </div>
    </ParallaxProvider>
  )
};

export default App;