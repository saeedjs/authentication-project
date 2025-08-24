"use client";
import { useLogin } from "@/hooks/useLogin";
import Button from "@/ui/Button/Button";
import Input from "@/ui/Input/Input";
import styles from "./Login.module.scss";

const LoginForm = () => {
    const {
        numberValidationError,
        loading,
        error,
        handleLogin,
        inputRef,
    } = useLogin();

    return (
        <div className={styles.loginWrapper}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <span className={styles.loginTitle}>ورود</span>
                <Input
                    ref={inputRef}
                    className="mt20"
                    name="number"
                    type="number"
                    placeholder="شماره موبایل خود را وارد کنید."
                    error={numberValidationError ?? error ?? ""}
                />
                <Button
                    type="submit"
                    className="mt10"
                    fullWidth
                    size="md"
                    loading={loading}
                >
                    ادامه
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;
