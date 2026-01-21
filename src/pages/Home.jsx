import React from 'react';
import { ArrowRight, Zap, Shield, Smartphone, Laptop, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSettings } from '../context/SettingsContext';
const Home = () => {
    const { t } = useSettings();

    return (
        <div className="animate-fade-in hero-padding" style={{ paddingTop: '120px' }}>
            {/* Hero Section */}
            <section className="container hero-section" style={{ textAlign: 'center', padding: '60px 0' }}>
                <h1 className="hero-title" style={{ fontSize: 'var(--fs-h1)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    {t('heroTitle')} <br />
                    <span className="text-gradient">{t('heroSubtitle')}</span>
                </h1>
                <p className="hero-subtitle" style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    {t('heroDesc')}
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/products" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {t('catalogBtn')} <ArrowRight size={18} />
                    </Link>
                    <button className="btn-secondary">
                        {t('moreBtn')}
                    </button>
                </div>
            </section>

            {/* Features */}
            <section className="container features-grid" style={{ padding: '40px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                <div className="glass-morphism" style={{ padding: '2rem' }}>
                    <Zap color="var(--primary)" size={40} style={{ marginBottom: '1rem' }} />
                    <h3>{t('speed')}</h3>
                    <p style={{ color: 'var(--text-muted)' }}>{t('speedDesc')}</p>
                </div>
                <div className="glass-morphism" style={{ padding: '2rem' }}>
                    <Shield color="var(--secondary)" size={40} style={{ marginBottom: '1rem' }} />
                    <h3>{t('warranty')}</h3>
                    <p style={{ color: 'var(--text-muted)' }}>{t('warrantyDesc')}</p>
                </div>
                <div className="glass-morphism" style={{ padding: '2rem' }}>
                    <Smartphone color="var(--accent)" size={40} style={{ marginBottom: '1rem' }} />
                    <h3>{t('service')}</h3>
                    <p style={{ color: 'var(--text-muted)' }}>{t('serviceDesc')}</p>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="container categories-section" style={{ padding: '60px 0' }}>
                <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '3rem', textAlign: 'center' }}>{t('popular')}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div className="glass-morphism cat-card" style={{ height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'var(--transition)' }}>
                        <Smartphone size={60} color="var(--primary)" />
                        <h3>{t('smartphones')}</h3>
                    </div>
                    <div className="glass-morphism cat-card" style={{ height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                        <Laptop size={60} color="var(--secondary)" />
                        <h3>{t('laptops')}</h3>
                    </div>
                    <div className="glass-morphism cat-card" style={{ height: '240px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                        <Headphones size={60} color="var(--accent)" />
                        <h3>{t('audio')}</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
