import { useState } from 'react'
import './App.css'
import './theme/color.css';
import Header from "./components/Header/Header.jsx"
import Home from './Pages/HomePage/Home.jsx';
import About from './Pages/AboutPage/About.jsx';
import Skills from './Pages/SkillsPage/Skills.jsx';

const App = () => {
  const USERNAME = "Wilbur Stanley";
  const PROFESSION = "Multi-Stack Developer";

  return (
    <>
      <Header username={USERNAME} />
      <Home username={USERNAME} profession={PROFESSION} />
      <About />
      <Skills />
    </>
  )
}

export default App
