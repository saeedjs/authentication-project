import styles from "../../styles/login.module.scss";
import LoginForm from "./LoginForm";

const Auth = () => {
    return (
        <div className={styles.login_page}>
            <LoginForm />
        </div>
    );
}

export default Auth;