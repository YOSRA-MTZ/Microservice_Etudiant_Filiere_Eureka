import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import Students from './components/Students';
function App() {
  return (
   <Container>
    <Home />
    <Students />
   </Container>
  );
}

export default App;
