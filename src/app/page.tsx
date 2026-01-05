import Link from "next/link";
import styles from "./page.module.css";
import { Calculator, TrendingUp, BookOpen, ArrowRight, Percent } from "lucide-react";

export default function Home() {
  return (
    <div className="container">
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Master Your Money <br />
          <span className="text-gradient">Design Your Future</span>
        </h1>
        <p className={styles.subtitle}>
          Professional financial tools for smart planning. Calculate EMIs, plan investments, and explore financial insights with precision.
        </p>
        <div className={styles.ctaGroup}>
          <Link href="/emi-calculator" className="btn btn-primary">
            <Calculator size={20} /> Start Calculating
          </Link>
          <Link href="/about" className="btn btn-accent">
            View Profile <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <Link href="/emi-calculator" className="card" style={{ textDecoration: 'none' }}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox}><Calculator size={24} /></div>
            <h3>Smart Loan Planner</h3>
          </div>
          <p>Visualize your loan repayment journey. Calculate monthly EMIs for Home, Car, or Personal loans with detailed breakdowns.</p>
        </Link>

        <Link href="/sip-calculator" className="card" style={{ textDecoration: 'none' }}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox} style={{ background: 'rgba(217, 119, 6, 0.1)', color: 'var(--accent)' }}><TrendingUp size={24} /></div>
            <h3>Wealth Builder (SIP)</h3>
          </div>
          <p>See the magic of compounding. Plan your systematic investments and forecast your wealth creation over time.</p>
        </Link>

        <Link href="/gst-calculator" className="card" style={{ textDecoration: 'none' }}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox} style={{ background: 'rgba(239, 68, 68, 0.1)', color: 'var(--danger)' }}><Percent size={24} /></div>
            <h3>GST Calculator</h3>
          </div>
          <p>Instant GST computations. Calculate inclusive and exclusive taxes for goods and services with pre-set rates.</p>
        </Link>

        <Link href="/about" className="card" style={{ textDecoration: 'none' }}>
          <div className={styles.cardHeader}>
            <div className={styles.iconBox} style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success)' }}><BookOpen size={24} /></div>
            <h3>Expertise & Skills</h3>
          </div>
          <p>Explore the professional portfolio of Aastha. Specialized in Financial Accounting, Tally, and Data Management.</p>
        </Link>
      </section>
    </div>
  );
}
