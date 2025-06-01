import styles from "./styles.module.css";

function OverviewPanel() {
  return (
    <div className={styles.overviewPanel}>
      <h3 className={styles.panelTitle}>總覽</h3>
      <p>這裡是總覽頁面的內容。可以顯示重要的統計資料和快速摘要。</p>
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>1,234</div>
          <div className={styles.statLabel}>總用戶數</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumberGreen}>567</div>
          <div className={styles.statLabel}>活躍用戶</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumberPurple}>89%</div>
          <div className={styles.statLabel}>滿意度</div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPanel;
