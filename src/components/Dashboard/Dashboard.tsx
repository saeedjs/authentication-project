import styles from "./Dashboard.module.scss";

const Dashboard = () => {
    return (
        <div className={styles.dashboardWrapper}>
            <span className={styles.welcomText}>Welcome to the Dashboard</span>
        </div>
    );
}

export default Dashboard;