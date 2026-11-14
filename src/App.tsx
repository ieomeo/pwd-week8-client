import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import HomePage from './pages/HomePage';
import GlobalStyles from './styles/GlobalStyles';
import './App.css';

export default function App() {
  return (
    <HashRouter>
      <GlobalStyles />
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="footer">© 2026 Ajou Campus Foodmap</footer>
      </div>
    </HashRouter>
  );
}
