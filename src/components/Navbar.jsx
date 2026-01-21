import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShoppingCart, User, Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="glass-morphism" style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '90%',
            maxWidth: '1200px',
            zIndex: 1000,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img src="/znanyy.svg" alt="ZNANYY Logo" style={{ height: '32px' }} />
                <span className="heading" style={{ fontSize: '1.5rem', fontWeight: 800 }}>ZNANYY</span>
            </Link>

            <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                <Link to="/" style={{ fontWeight: 500 }}>Головна</Link>
                <Link to="/products" style={{ fontWeight: 500 }}>Товари</Link>
                <Link to="/about" style={{ fontWeight: 500 }}>Про нас</Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <button><User size={20} color="#a0a0a8" /></button>
                <button><ShoppingCart size={20} color="#a0a0a8" /></button>
                <button className="btn-primary" style={{ padding: '0.5rem 1.2rem' }}>Увійти</button>
            </div>
        </nav>
    );
};

export default Navbar;
