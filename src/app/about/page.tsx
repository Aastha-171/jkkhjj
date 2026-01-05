import styles from './page.module.css';

export default function About() {
    return (
        <div className="container" style={{ padding: '4rem 1.5rem' }}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>About Me</h1>
                <p className={styles.subtitle}>
                    Finance professional with a knack for data management and operational efficiency.
                </p>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Summary</h2>
                    <p className={styles.text}>
                        Bachelor's of Commerce (Computer Applications) graduate with hands-on internship experience in accounting and financial data management.
                        Proficient in Tally, MS Excel, and financial reconciliation under US GAAP. Adept at improving financial data accuracy and optimizing reporting workflows.
                        Seeking an Associate role to leverage my analytical skills and operational expertise to drive finance processes in a corporate environment.
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Experience</h2>
                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <h3 className={styles.role}>Finance & Data Management Intern</h3>
                            <span className={styles.date}>06/2025 - 10/2025</span>
                        </div>
                        <div className={styles.company}>ACES India Private Limited</div>
                        <ul className={styles.list}>
                            <li>Maintained and reported financial records, ensuring 100% accuracy through regular reconciliation of purchase orders, bank statements, and Tally data.</li>
                            <li>Updated and organized financial documents using Google Sheets and MS Excel, improving data accessibility.</li>
                            <li>Performed data entry and assisted in organizing finance-related documentation.</li>
                            <li>Supported daily finance operations and gained hands-on experience in accounting workflows.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Education</h2>
                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <h3 className={styles.role}>Bachelor's of Commerce</h3>
                            <span className={styles.date}>2022 - 2025</span>
                        </div>
                        <div className={styles.company}>St. Ann's College for Women</div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.itemHeader}>
                            <h3 className={styles.role}>Intermediate</h3>
                            <span className={styles.date}>2020 - 2022</span>
                        </div>
                        <div className={styles.company}>Kendriya Vidyalaya Gachibowli</div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Skills</h2>
                    <div className={styles.skills}>
                        <span className={styles.skill}>Financial Accounting</span>
                        <span className={styles.skill}>Tally PRIME</span>
                        <span className={styles.skill}>MS Excel (Advanced)</span>
                        <span className={styles.skill}>US GAAP Knowledge</span>
                        <span className={styles.skill}>Data Management</span>
                        <span className={styles.skill}>SQL</span>
                        <span className={styles.skill}>HTML</span>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Certifications</h2>
                    <ul className={styles.list}>
                        <li><strong>Accounts Executive</strong> - ArthaVidhya (NSQF Level 4)</li>
                        <li><strong>Tally PRIME</strong> - Accounts Hub</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
