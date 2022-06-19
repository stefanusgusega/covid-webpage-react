import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Data from './pages/Data';
import { Layout } from 'antd';
import { Codes } from './pages/Codes';

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path='/' element={
              <Layout>
                <Home name='Stefanus'/>
              </Layout>}>
            </Route>
            <Route path='/data' element={
              <Layout>
                <Data />
              </Layout>}>
            </Route>
            <Route path='/about' element={
              <Layout>
                <Codes />
              </Layout>}>
            </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
