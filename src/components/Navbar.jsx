import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X, Globe, DollarSign } from 'lucide-react';
import logo from '../assets/logo.png';
import { useSettings } from '../context/SettingsContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang, currency, setCurrency, t } = useSettings();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="glass-morphism nav-desktop" style={{
                position: 'fixed',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '90%',
                maxWidth: '1200px',
                zIndex: 1000,
                padding: '0.8rem 1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'var(--transition)'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <img src={logo} alt="ZNANYY Logo" style={{ height: '36px' }} />
                    <span className="brand-font" style={{ fontSize: '1.2rem', fontWeight: 800 }}>ZNANYY</span>
                </Link>

                <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link to="/" style={{ fontWeight: 500 }}>{t('home')}</Link>
                    <Link to="/products" style={{ fontWeight: 500 }}>{t('products')}</Link>
                    <Link to="/about" style={{ fontWeight: 500 }}>{t('about')}</Link>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <div className="nav-settings" style={{ display: 'flex', gap: '10px', marginRight: '1rem' }}>
                        <div style={{ display: 'flex', gap: '2px', background: 'rgba(255,255,255,0.05)', padding: '2px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                            {['ua', 'en'].map(l => (
                                <button key={l} onClick={() => setLang(l)} style={{
                                    padding: '4px 10px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800,
                                    background: lang === l ? 'var(--primary)' : 'transparent',
                                    color: lang === l ? 'white' : 'var(--text-muted)'
                                }}>{l.toUpperCase()}</button>
                            ))}
                        </div>
                        <div style={{ display: 'flex', gap: '2px', background: 'rgba(255,255,255,0.05)', padding: '2px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                            {['UAH', 'USD', 'EUR'].map(c => (
                                <button key={c} onClick={() => setCurrency(c)} style={{
                                    padding: '4px 8px', borderRadius: '8px', fontSize: '0.7rem', fontWeight: 800,
                                    background: currency === c ? 'var(--secondary)' : 'transparent',
                                    color: currency === c ? 'white' : 'var(--text-muted)'
                                }}>{c === 'UAH' ? '₴' : c === 'USD' ? '$' : '€'}</button>
                            ))}
                        </div>
                    </div>

                    <div className="nav-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <button><User size={18} color="var(--text-muted)" /></button>
                        <button><ShoppingCart size={18} color="var(--text-muted)" /></button>
                    </div>
                    <button className="mobile-menu-btn" onClick={toggleMenu} style={{ display: 'none', color: 'var(--text-main)' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <button className="btn-primary login-btn" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>{t('login')}</button>
                </div>
            </nav>

            {/* Mobile Menu - Full Screen */}
            <div className={`mobile-menu glass-morphism ${isOpen ? 'open' : ''}`}>
                <button
                    onClick={toggleMenu}
                    style={{
                        position: 'absolute',
                        top: '25px',
                        right: '25px',
                        color: 'var(--text-main)',
                        padding: '10px'
                    }}
                >
                    <X size={32} />
                </button>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '20px', textAlign: 'center' }}>
                    <Link to="/" onClick={toggleMenu} style={{ fontSize: '1.4rem', fontWeight: 600 }}>{t('home')}</Link>
                    <Link to="/products" onClick={toggleMenu} style={{ fontSize: '1.4rem', fontWeight: 600 }}>{t('products')}</Link>
                    <Link to="/about" onClick={toggleMenu} style={{ fontSize: '1.4rem', fontWeight: 600 }}>{t('about')}</Link>
                </div>

                <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--glass-border)' }} />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.8rem' }}>
                        <button onClick={() => setLang('ua')} style={{
                            padding: '1.2rem', borderRadius: '16px', fontSize: '1.2rem', fontWeight: 700,
                            background: lang === 'ua' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                            border: '1px solid ' + (lang === 'ua' ? 'var(--primary)' : 'var(--glass-border)'),
                            width: '100%'
                        }}>Українська</button>
                        <button onClick={() => setLang('en')} style={{
                            padding: '1.2rem', borderRadius: '16px', fontSize: '1.2rem', fontWeight: 700,
                            background: lang === 'en' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                            border: '1px solid ' + (lang === 'en' ? 'var(--primary)' : 'var(--glass-border)'),
                            width: '100%'
                        }}>English</button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem' }}>
                        {['UAH', 'USD', 'EUR'].map(c => (
                            <button key={c} onClick={() => setCurrency(c)} style={{
                                padding: '1.2rem 0', borderRadius: '16px', fontSize: '1.5rem', fontWeight: 800,
                                background: currency === c ? 'var(--secondary)' : 'rgba(255,255,255,0.05)',
                                border: '1px solid ' + (currency === c ? 'var(--secondary)' : 'var(--glass-border)')
                            }}>
                                {c === 'UAH' ? '₴' : c === 'USD' ? '$' : '€'}
                            </button>
                        ))}
                    </div>
                </div>

                <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid var(--glass-border)' }} />

                <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem' }}>
                    <button><User size={32} color="var(--text-main)" /></button>
                    <button><ShoppingCart size={32} color="var(--text-main)" /></button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
