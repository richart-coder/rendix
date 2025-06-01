import styles from "./styles.module.css";

function DetailsPanel() {
  return (
    <div className={styles.detailsPanel}>
      <h3 className={styles.panelTitle}>詳細資料</h3>
      <p>這裡展示更詳細的資料和分析。</p>
      <div className={styles.detailsList}>
        <div className={styles.detailCard}>
          <h4 className={styles.detailTitle}>用戶增長趨勢</h4>
          <p className={styles.detailText}>本月新增用戶比上月增長 15%</p>
        </div>
        <div className={styles.detailCard}>
          <h4 className={styles.detailTitle}>熱門功能</h4>
          <p className={styles.detailText}>儀表板功能使用率最高，達 78%</p>
        </div>
        <div className={styles.detailCard}>
          <h4 className={styles.detailTitle}>地區分布</h4>
          <p className={styles.detailText}>亞洲地區用戶佔總數的 45%</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPanel;
