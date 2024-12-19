import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Landing from './Pages/Landing';
import AccCementPage from './Pages/AccCementPage';
import ShyamSteel from './Pages/ShyamSteel';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        {}
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/acc-cement" element={<AccCementPage/>} />
        <Route path="/shyam-steel" element={<ShyamSteel/>}/>
        <Route path="/shop-now" element={<LoginPage/>}/>
    
      </Routes>
    </HashRouter>
   
  );
}

export default App;
