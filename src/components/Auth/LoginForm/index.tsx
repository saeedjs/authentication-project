"use client";
import { useLogin } from "@/hooks/useLogin";
import Button from "@/ui/Button";
import Input from "@/ui/Input";
import styles from "../../../styles/login.module.scss";

const LoginForm = () => {
    const {
        numberValidationError,
        loading,
        error,
        handleLogin,
        inputRef,
    } = useLogin();

    return (
        <form className={styles.login_form} onSubmit={handleLogin}>
            <span className={styles.login_title}>ورود</span>
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
    );
};

export default LoginForm;
