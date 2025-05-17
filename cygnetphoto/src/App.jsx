import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
