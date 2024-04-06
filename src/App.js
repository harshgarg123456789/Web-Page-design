import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SellerTools from './pages/SellerTools';
import Homepage from './pages/Homepage';
import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="h-full w-full">
      <Navigation />
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/sellertools' element={<SellerTools/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;