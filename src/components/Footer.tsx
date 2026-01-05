import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <p>© {new Date().getFullYear()} Aastha. All rights reserved.</p>
                <div className={styles.socials}>
                    <span className={styles.madeText}>Finance & Data Management Graduate</span>
                </div>
            </div>
        </footer>
    );
}
