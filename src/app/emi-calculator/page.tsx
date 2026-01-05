"use client";
import { useState, useEffect } from 'react';
import styles from './page.module.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export default function EMICalculator() {
    const [loanAmount, setLoanAmount] = useState<number>(1000000);
    const [interestRate, setInterestRate] = useState<number>(10);
    const [tenure, setTenure] = useState<number>(5);
    const [emi, setEmi] = useState<number>(0);
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        calculateEMI();
    }, [loanAmount, interestRate, tenure]);

    const calculateEMI = () => {
        const r = interestRate / 12 / 100;
        const n = tenure * 12;
        const emiValue = loanAmount * r * (Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1));

        const totalAmount = emiValue * n;
        const totalInterest = totalAmount - loanAmount;

        setEmi(Math.round(emiValue));
        setChartData([
            { name: 'Principal Amount', value: Math.round(loanAmount) },
            { name: 'Total Interest', value: Math.round(totalInterest) },
        ]);
    };

    const COLORS = ['#3b82f6', '#d97706']; // Blue, Amber

    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div className={styles.wrapper}>
                <div style={{ textAlign: 'center' }}>
                    <h1 className={styles.title}>EMI Calculator</h1>
                    <p className={styles.description}>Plan your loan repayments nicely.</p>
                </div>

                <div className={styles.grid}>
                    <div className="card glass">
                        <div className={styles.inputGroup}>
                            <label>Loan Amount (₹)</label>
                            <input
                                type="range"
                                min="10000" max="10000000" step="10000"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className={styles.range}
                            />
                            <input
                                type="number"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Interest Rate (% p.a)</label>
                            <input
                                type="range"
                                min="1" max="30" step="0.1"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className={styles.range}
                            />
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.inputGroup}>
                            <label>Tenure (Years)</label>
                            <input
                                type="range"
                                min="1" max="30" step="1"
                                value={tenure}
                                onChange={(e) => setTenure(Number(e.target.value))}
                                className={styles.range}
                            />
                            <input
                                type="number"
                                value={tenure}
                                onChange={(e) => setTenure(Number(e.target.value))}
                                className={styles.input}
                            />
                        </div>
                    </div>

                    <div className="card glass" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                        <h2>Monthly EMI</h2>
                        <div className={styles.result}>₹ {emi > 0 ? emi.toLocaleString('en-IN') : '0'}</div>

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
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>Total Interest:</span>
                                <span style={{ color: 'var(--accent)', fontWeight: 600 }}>₹ {(emi * tenure * 12 - loanAmount).toLocaleString('en-IN')}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span>Total Amount:</span>
                                <span style={{ fontWeight: 600 }}>₹ {(emi * tenure * 12).toLocaleString('en-IN')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
