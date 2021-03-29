import { Navbar } from 'react-bootstrap';
import WordDerivation from '../games/WordDerivation';

function App() {
  return (
    <div className="container">
       <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            Word Derivations
          </Navbar.Brand >
       </Navbar>
       <WordDerivation/>
    </div>
  );
}

export default App;
