import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function MainPage() {
  return (
    <>
      <Home />
      <About />
      <TechStack />
      <Services />
      <Skills />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
