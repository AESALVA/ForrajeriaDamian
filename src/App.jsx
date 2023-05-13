import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Contact from './components/Contact';
import About from './components/About';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
   
     <Header />
     <Routes>
     <Route path="/" element={<Landing />} />
     <Route path='/about' element={<About />} />
     <Route path='/contact' element={<Contact />} />
     </Routes>
     <Footer />
    </>
  )
}

export default App
