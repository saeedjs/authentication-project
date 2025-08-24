import React from "react";
import styles from "../styles/button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "danger" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  fullWidth?: boolean;
  type: "button" | "submit" | "reset"
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  onDoubleClick,
  disabled = false,
  className = "",
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  type = "button"
}) => {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    fullWidth ? styles.fullWidth : "",
    disabled || loading ? styles.disabled : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && <span className={styles.spinner}></span>}
      {children}
    </button>
  );
};

export default Button;
