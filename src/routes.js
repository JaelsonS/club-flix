import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Filme from './pages/Filme';
import Favoritos from './pages/Favoritos';
import About from './pages/About';
import Header from './components/Header';
import Erro from './pages/Erro';

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/sobre" element={<About />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;