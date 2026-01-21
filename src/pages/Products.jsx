import React from 'react';
import { Filter, Search, ShoppingCart, Star } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

const products = [
    { id: 1, name: 'reCrafted Pro X', category: 'Смартфони', price: '45999', rating: 4.9 },
    { id: 2, name: 'Aether Book 14', category: 'Ноутбуки', price: '62500', rating: 4.8 },
    { id: 3, name: 'Sonic Bloom V2', category: 'Аудіо', price: '12999', rating: 4.7 },
    { id: 4, name: 'Titan Monitor 32', category: 'Екрани', price: '28000', rating: 5.0 },
    { id: 5, name: 'Pulse Pad Pro', category: 'Планшети', price: '34200', rating: 4.6 },
    { id: 6, name: 'Zenith Watch', category: 'Аксесуари', price: '15400', rating: 4.8 },
];

const Products = () => {
    const { t, formatPrice } = useSettings();

    return (
        <div className="animate-fade-in" style={{ paddingTop: '120px' }}>
            <div className="container">
                <div className="products-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <h1 style={{ fontSize: 'var(--fs-h2)' }}>{t('catalogTitle')} <span className="text-gradient">{t('tech')}</span></h1>
                    <div className="products-controls" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%', maxWidth: '500px' }}>
                        <div className="glass-morphism search-bar" style={{ display: 'flex', alignItems: 'center', padding: '0.6rem 1rem', gap: '10px', flex: 1 }}>
                            <Search size={18} color="var(--text-muted)" />
                            <input type="text" placeholder={t('search')} style={{ background: 'none', border: 'none', color: 'white', outline: 'none', width: '100%' }} />
                        </div>
                        <button className="glass-morphism" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0.6rem 1.5rem' }}>
                            <Filter size={18} /> <span className="filter-text">{t('filters')}</span>
                        </button>
                    </div>
                </div>

                <div className="products-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '80px' }}>
                    {products.map((product) => (
                        <div key={product.id} className="glass-morphism product-card" style={{ padding: '1.2rem', transition: 'var(--transition)' }}>
                            <div className="product-img-placeholder" style={{
                                height: '180px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '12px',
                                marginBottom: '1.2rem',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontSize: '0.8rem',
                                color: 'var(--text-muted)',
                                border: '1px dashed var(--glass-border)',
                                textAlign: 'center',
                                padding: '1rem'
                            }}>
                                [ {product.name} ]
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                                <div style={{ flex: 1 }}>
                                    <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase' }}>{product.category}</span>
                                    <h3 style={{ fontSize: '1.2rem', marginTop: '0.2rem' }}>{product.name}</h3>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '20px' }}>
                                    <Star size={12} fill="gold" color="gold" />
                                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{product.rating}</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.2rem' }}>
                                <span style={{ fontSize: '1.3rem', fontWeight: 700 }}>{formatPrice(product.price)}</span>
                                <button className="btn-primary" style={{ padding: '0.6rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <ShoppingCart size={18} />
                                    <span className="buy-text" style={{ fontSize: '0.9rem' }}>{t('buy')}</span>
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
