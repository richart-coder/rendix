import styles from "./styles.module.css";

function SettingsPanel() {
  return (
    <div className={styles.settingsPanel}>
      <h3 className={styles.panelTitle}>設定</h3>
      <p>系統設定和個人偏好選項。</p>
      <div className={styles.settingsList}>
        <div className={styles.settingCard}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} defaultChecked />
            啟用電子郵件通知
          </label>
        </div>
        <div className={styles.settingCard}>
          <label className={styles.checkboxLabel}>
            <input type="checkbox" className={styles.checkbox} />
            啟用推播通知
          </label>
        </div>
        <div className={styles.settingCard}>
          <label className={styles.selectLabel}>
            <span className={styles.labelText}>主題設定</span>
            <select className={styles.select}>
              <option>淺色主題</option>
              <option>深色主題</option>
              <option>自動切換</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SettingsPanel;
