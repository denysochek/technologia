import React from 'react';
import { Filter, Search, ShoppingCart, Star } from 'lucide-react';

const products = [
    { id: 1, name: 'reCrafted Pro X', category: 'Смартфони', price: '45 999 ₴', rating: 4.9 },
    { id: 2, name: 'Aether Book 14', category: 'Ноутбуки', price: '62 500 ₴', rating: 4.8 },
    { id: 3, name: 'Sonic Bloom V2', category: 'Аудіо', price: '12 999 ₴', rating: 4.7 },
    { id: 4, name: 'Titan Monitor 32', category: 'Екрани', price: '28 000 ₴', rating: 5.0 },
    { id: 5, name: 'Pulse Pad Pro', category: 'Планшети', price: '34 200 ₴', rating: 4.6 },
    { id: 6, name: 'Zenith Watch', category: 'Аксесуари', price: '15 400 ₴', rating: 4.8 },
];

const Products = () => {
    return (
        <div className="animate-fade-in" style={{ paddingTop: '150px' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '3rem' }}>Каталог <span className="text-gradient">Техніки</span></h1>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <div className="glass-morphism" style={{ display: 'flex', alignItems: 'center', padding: '0.5rem 1rem', gap: '10px' }}>
                            <Search size={18} color="var(--text-muted)" />
                            <input type="text" placeholder="Пошук..." style={{ background: 'none', border: 'none', color: 'white', outline: 'none' }} />
                        </div>
                        <button className="glass-morphism" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.5rem 1.5rem' }}>
                            <Filter size={18} /> Фільтри
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem', marginBottom: '100px' }}>
                    {products.map((product) => (
                        <div key={product.id} className="glass-morphism" style={{ padding: '1.5rem', transition: 'var(--transition)' }}>
                            <div style={{
                                height: '220px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                marginBottom: '1.5rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '0.9rem',
                                color: 'var(--text-muted)',
                                border: '1px dashed var(--glass-border)'
                            }}>
                                [ Місце для зображення {product.name} ]
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase' }}>{product.category}</span>
                                    <h3 style={{ fontSize: '1.4rem', marginTop: '0.2rem' }}>{product.name}</h3>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Star size={14} fill="gold" color="gold" />
                                    <span style={{ fontSize: '0.9rem' }}>{product.rating}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700 }}>{product.price}</span>
                                <button className="btn-primary" style={{ padding: '0.6rem', borderRadius: '12px' }}>
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
