import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home name='Stefanus'/>}></Route>
          {/* TODO : Add data and about element */}
          <Route path='/data' element={<Home name='Stefanus'/>}></Route>
          <Route path='/about' element={<Home name='Stefanus'/>}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
