import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import { ThemeToggle } from './components/ThemeToggle';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Photography from './pages/services/Photography';
import CameraSales from './pages/services/CameraSales';
import CameraService from './pages/services/CameraService';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Navbar />
          <ThemeToggle />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/photography" element={<Photography />} />
              <Route path="/services/camera-sales" element={<CameraSales />} />
              <Route path="/services/camera-service" element={<CameraService />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
