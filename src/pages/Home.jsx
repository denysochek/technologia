import React from 'react';
import { ArrowRight, Zap, Shield, Smartphone, Laptop, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '120px' }}>
            {/* Hero Section */}
            <section className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
                <h1 style={{ fontSize: '4.5rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                    Технології Майбутнього <br />
                    <span className="text-gradient">Вже Сьогодні</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Відкрийте для себе найсучаснішу електроніку, яка змінює правила гри. Ми зібрали кращі інновації в одному місці для вашого комфорту та продуктивності.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <Link to="/products" className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Каталог Товарів <ArrowRight size={18} />
                    </Link>
                    <button className="glass-morphism" style={{ padding: '0.8rem 1.8rem', borderRadius: '100px', fontWeight: 600 }}>
                        Дізнатись Більше
                    </button>
                </div>
            </section>

            {/* Features */}
            <section className="container" style={{ padding: '80px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                <div className="glass-morphism" style={{ padding: '2rem' }}>
                    <Zap color="var(--primary)" size={40} style={{ marginBottom: '1rem' }} />
                    <h3>Швидкість</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Найшвидша доставка по всій країні та миттєва підтримка клієнтів.</p>
                </div>
                <div className="glass-morphism" style={{ padding: '2rem' }}>
                    <Shield color="var(--secondary)" size={40} style={{ marginBottom: '1rem' }} />
                    <h3>Гарантія</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Офіційна гарантія від виробника на всі види техніки 24 місяці.</p>
                </div>
                <div className="glass-morphism" style={{ padding: '2rem' }}>
                    <Smartphone color="var(--accent)" size={40} style={{ marginBottom: '1rem' }} />
                    <h3>Сервіс</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Власний сервісний центр для обслуговування вашої електроніки.</p>
                </div>
            </section>

            {/* Featured Categories */}
            <section className="container" style={{ padding: '100px 0' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}>Популярні Категорії</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                    <div className="glass-morphism" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer', transition: 'var(--transition)' }}>
                        <Smartphone size={60} color="var(--primary)" />
                        <h3>Смартфони</h3>
                    </div>
                    <div className="glass-morphism" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                        <Laptop size={60} color="var(--secondary)" />
                        <h3>Ноутбуки</h3>
                    </div>
                    <div className="glass-morphism" style={{ height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}>
                        <Headphones size={60} color="var(--accent)" />
                        <h3>Аудіо</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
