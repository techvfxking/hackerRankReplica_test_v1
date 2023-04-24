import './App.css'
import BottomHero from './Pages/BottomHero/BottomHero';
import Content from './Pages/Content/Content';
import Hero from './Pages/Hero/Hero';
import Navbar from './Pages/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const bottomHeroData = {
    title1: `Every company is a tech company.`,
    title2: "We’re here to help ‘em all.",
    description1:
      `More than 3,000 tech teams, representing all industries and from countries around the world, 
      trust HackerRank to connect with developers and add cutting-edge skills to their teams.`,
    description2: `That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.`,
    isButton: false,
    buttonText: "",
  };

  const bottomHeroData2 = {
    title1: `Practice coding challenges &`,
    title2: "We’re here to help ‘em all.",
    description1:
      `More than 3,000 tech teams, representing all industries and from countries around the world, 
      trust HackerRank to connect with developers and add cutting-edge skills to their teams.`,
    description2: `That includes 25% of the Fortune 100 — and that moonshot startup that just came out of stealth.`,
    isButton: true,
    buttonText:"Join the community"
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Content/>
        <BottomHero {...bottomHeroData } />
      </BrowserRouter>
    </>
  )
}

export default App
