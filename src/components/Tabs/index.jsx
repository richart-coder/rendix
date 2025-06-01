import { useState } from "preact/hooks";
import Match from "../../Match";
import DetailsPanel from "./DetailsPanel";
import OverviewPanel from "./OverviewPanel";
import SettingsPanel from "./SettingsPanel";
import styles from "./styles.module.css";

function TabsExample() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "總覽" },
    { id: "details", label: "詳細資料" },
    { id: "settings", label: "設定" },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>儀表板範例</h1>

      <div className={styles.tabNavContainer}>
        <nav className={styles.tabNav}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${styles.tabButton} ${
                activeTab === tab.id
                  ? styles.tabButtonActive
                  : styles.tabButtonHover
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className={styles.tabContent}>
        <Match value={activeTab}>
          {() => ({
            overview: <OverviewPanel />,
            details: <DetailsPanel />,
            settings: <SettingsPanel />,
            _: <div className={styles.notFound}>找不到對應的頁面</div>,
          })}
        </Match>
      </div>

      <div className={styles.statusDisplay}>
        當前 Tab: <span className={styles.statusValue}>{activeTab}</span>
      </div>
    </div>
  );
}

export default TabsExample;
