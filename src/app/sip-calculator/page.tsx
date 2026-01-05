"use client";
import { useState, useEffect } from 'react';
import styles from '../emi-calculator/page.module.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function SIPCalculator() {
    const [investment, setInvestment] = useState<number>(5000);
    const [rate, setRate] = useState<number>(12);
    const [years, setYears] = useState<number>(10);
    const [result, setResult] = useState<{ invested: number, returns: number, total: number } | null>(null);
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        calculateSIP();
    }, [investment, rate, years]);

    const calculateSIP = () => {
        const i = rate / 12 / 100;
        const n = years * 12;
        const totalValue = investment * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        const totalInvested = investment * n;

        setResult({
            invested: Math.round(totalInvested),
            returns: Math.round(totalValue - totalInvested),
            total: Math.round(totalValue)
        });

        setChartData([
            { name: 'Invested Amount', value: Math.round(totalInvested) },
            { name: 'Estimated Returns', value: Math.round(totalValue - totalInvested) },
        ]);
    };

    const COLORS = ['#94a3b8', '#10b981']; // Grey, Green

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div className={styles.wrapper}>
                <div style={{ textAlign: 'center' }}>
                    <h1 className={styles.title}>SIP Calculator</h1>
                    <p className={styles.description}>Estimate the future value of your systematic investments.</p>
                </div>

                <div className={styles.grid}>
                    <div className="card glass">
                        <div className={styles.inputGroup}>
                            <label>Monthly Investment (₹)</label>
                            <input
                                type="range"
                                min="500" max="100000" step="500"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className={styles.range}
                            />
                            <input
                                type="number"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Expected Return Rate (% p.a)</label>
                            <input
                                type="range"
                                min="1" max="30" step="0.5"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className={styles.range}
                            />
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Time Period (Years)</label>
                            <input
                                type="range"
                                min="1" max="40" step="1"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className={styles.range}
                            />
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className="card glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <h2>Maturity Value</h2>
                        <div className={styles.result} style={{ color: 'var(--success)', backgroundImage: 'none' }}>
                            ₹ {result ? result.total.toLocaleString('en-IN') : '0'}
                        </div>

                        <div style={{ width: '100%', height: 250 }}>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={chartData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        fill="#8884d8"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {chartData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value: any) => `₹ ${value.toLocaleString('en-IN')}`} />
                                    <Legend />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div style={{ width: '100%', marginTop: '1rem', textAlign: 'left', fontSize: '0.9rem' }}>
                            <p className={styles.note} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Invested Amount:</span>
                                <span style={{ color: 'var(--text)', fontWeight: 600 }}>₹ {result ? result.invested.toLocaleString('en-IN') : '0'}</span>
                            </p>
                            <p className={styles.note} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Est. Returns:</span>
                                <span style={{ color: '#10b981', fontWeight: 600 }}>+ ₹ {result ? result.returns.toLocaleString('en-IN') : '0'}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
