import styles from "../../styles/dashboard.module.scss";

const HomeDashboard = () => {
    return (
        <div className={styles.dashboard_page}>
            <span className={styles.welcom_text}>Welcome to the Dashboard</span>
        </div>
    );
}

export default HomeDashboard;