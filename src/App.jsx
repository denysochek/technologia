import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<div className="container" style={{ paddingTop: '150px' }}><h1>Про нас</h1><p>ZNANYY - ваш надійний партнер у світі інновацій.</p></div>} />
          </Routes>
        </main>

        <footer style={{
          marginTop: '100px',
          padding: '4rem 0',
          borderTop: '1px solid var(--glass-border)',
          textAlign: 'center'
        }}>
          <div className="container">
            <h2 className="heading" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>ZNANYY</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Майбутнє вже тут. Приєднуйтесь до ZNANYY.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--text-muted)' }}>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
            <p style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#444' }}>&copy; 2026 reCrafted Store. Усі права захищені.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
