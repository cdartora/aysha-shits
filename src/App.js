import './App.css';
import Strip from './components/Strip';
import Bevel from './components/Bevel';
import Note from './components/Note';
import Jittering from './components/Jittering';
import Nav from './components/Nav';

function App() {
  return (
    <div>

      <Strip />
      <Bevel />
      <Note />
      <Nav />
      <Jittering />

      <div id="gallery-section" className="section">
        <h1>Galería Telúrio</h1>
      </div>

      <div id="work-section" className="section">
        <h1>Work</h1>
      </div>

      <div id="about-section" className="section">
        <h1>About</h1>
      </div>
    </div>
  );
}

export default App;
