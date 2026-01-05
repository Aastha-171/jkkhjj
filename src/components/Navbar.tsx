import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav + ' glass'}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Aastha<span className={styles.dot}>.</span>
        </Link>
        <div className={styles.links}>
          <Link href="/emi-calculator" className={styles.link}>EMI</Link>
          <Link href="/sip-calculator" className={styles.link}>SIP</Link>
          <Link href="/gst-calculator" className={styles.link}>GST</Link>
          <Link href="/about" className={styles.link}>About</Link>
        </div>
      </div>
    </nav>
  );
}
