import { Routes, Route } from "react-router"
import './App.css'
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;