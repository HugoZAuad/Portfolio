import './App.css';
import Navbar from './componentes/sections/Navbar'
import Presentation from './componentes/sections/Presentation';
import Skills from './componentes/sections/Skills';
import Projects from './componentes/sections/Projects';
import Footer from './componentes/sections/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
