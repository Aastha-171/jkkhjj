"use client";
import { useState } from 'react';
import styles from '../emi-calculator/page.module.css';

export default function GSTCalculator() {
    const [amount, setAmount] = useState<number>(10000);
    const [gstRate, setGstRate] = useState<number>(18);
    const [type, setType] = useState<'exclusive' | 'inclusive'>('exclusive');

    const calculateGST = () => {
        let gstAmount = 0;
        let total = 0;
        let original = 0;

        if (type === 'exclusive') {
            gstAmount = (amount * gstRate) / 100;
            total = amount + gstAmount;
            original = amount;
        } else {
            gstAmount = amount - (amount * (100 / (100 + gstRate)));
            total = amount;
            original = amount - gstAmount;
        }

        return { gst: gstAmount, total, original };
    };

    const { gst, total, original } = calculateGST();

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div className={styles.wrapper}>
                <div style={{ textAlign: 'center' }}>
                    <h1 className={styles.title}>GST Calculator</h1>
                    <p className={styles.description}>Calculate Goods and Service Tax easily.</p>
                </div>

                <div className={styles.grid}>
                    <div className="card glass">
                        <div className={styles.inputGroup} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                            <button
                                className={`btn ${type === 'exclusive' ? 'btn-primary' : ''}`}
                                style={{ background: type === 'exclusive' ? '' : 'var(--background)', color: type === 'exclusive' ? '' : 'var(--text)' }}
                                onClick={() => setType('exclusive')}
                            >
                                GST Exclusive
                            </button>
                            <button
                                className={`btn ${type === 'inclusive' ? 'btn-primary' : ''}`}
                                style={{ background: type === 'inclusive' ? '' : 'var(--background)', color: type === 'inclusive' ? '' : 'var(--text)' }}
                                onClick={() => setType('inclusive')}
                            >
                                GST Inclusive
                            </button>
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Amount (₹)</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>GST Rate (%)</label>
                            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
                                {[5, 12, 18, 28].map((r) => (
                                    <button
                                        key={r}
                                        onClick={() => setGstRate(r)}
                                        className="btn"
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: gstRate === r ? 'var(--accent)' : 'var(--background)',
                                            color: gstRate === r ? 'white' : 'var(--text)',
                                            border: '1px solid var(--border)'
                                        }}
                                    >
                                        {r}%
                                    </button>
                                ))}
                            </div>
                            <input
                                type="number"
                                value={gstRate}
                                onChange={(e) => setGstRate(Number(e.target.value))}
                                className={styles.input}
                                style={{ marginTop: '1rem' }}
                            />
                        </div>
                    </div>

                    <div className="card glass" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        <h2>Total Amount</h2>
                        <div className={styles.result} style={{ color: 'var(--base-primary)' }}>
                            ₹ {Math.round(total).toLocaleString('en-IN')}
                        </div>

                        <div style={{ width: '100%', marginTop: '2rem', textAlign: 'left', fontSize: '1rem' }}>
                            <div className={styles.note} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border)' }}>
                                <span>Net Amount:</span>
                                <span style={{ color: 'var(--text)', fontWeight: 600 }}>₹ {Math.round(original).toLocaleString('en-IN')}</span>
                            </div>
                            <div className={styles.note} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                                <span>GST Amount ({gstRate}%):</span>
                                <span style={{ color: 'var(--danger)', fontWeight: 600 }}>₹ {Math.round(gst).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
