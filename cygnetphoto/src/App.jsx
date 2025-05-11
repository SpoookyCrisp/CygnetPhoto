import { useState } from 'react'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import About from "./pages/about";
import Contact from "./pages/contact";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
