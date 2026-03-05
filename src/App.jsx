import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import CompanyInfo from './components/CompanyInfo'
import CallToAction from './components/CallToAction'
import CarbonStats from './components/CarbonStats'
import PillarsOfSuccess from './components/PillarsOfSuccess'
import HowItWorks from './components/HowItWorks'
import Gallery from './components/Gallery'
import MailingList from './components/MailingList'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AutoScrollToTop from './components/AutoScrollToTop'
import './App.css'

function App() {
  return (
    <Router>
      <AutoScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CompanyInfo />
                <CallToAction />
                <CarbonStats />
                <PillarsOfSuccess />
                <HowItWorks />
                <Gallery />
                <MailingList />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
