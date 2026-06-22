import './App.css'
import {Routes,Route} from "react-router-dom"
import About from './pages/about';
import Navbar from './components/Navbar';
import Home from './pages/home';
import Contact from './pages/contact';

function App() {
  return (
    <div className="text-white bg-[#111827] min-h-screen" >
      <div className="container relative">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
