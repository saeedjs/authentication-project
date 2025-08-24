import React, { forwardRef } from "react";
import styles from "../styles/input.module.scss";

interface InputProps {
  id?: string;
  name: string;
  type?: "text" | "email" | "password" | "number" | "date" | "file";
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  min?: number | string;
  max?: number | string;
  autoFocus?: boolean;
  autoComplete?: string;
  className?: string;
}

interface InputEvents {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface InputValidation {
  error?: string;
  isValid?: boolean;
}

type FullInputProps = InputProps & InputEvents & InputValidation;

const Input = forwardRef<HTMLInputElement, FullInputProps>(
  (
    {
      id,
      name,
      type = "text",
      placeholder,
      value,
      defaultValue,
      onChange,
      onBlur,
      onFocus,
      onKeyDown,
      onKeyUp,
      error,
      disabled,
      className = "",
      readOnly,
      required,
      maxLength,
      minLength,
      min,
      max,
      autoFocus,
      autoComplete,
    },
    ref
  ) => {
    const inputClasses = [
      styles.input,
      error ? styles.error : "",
      disabled ? styles.disabled : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={styles.inputWrapper}>
        <input
          ref={ref}
          id={id || name}
          name={name}
          type={type}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          min={min}
          max={max}
          autoFocus={autoFocus}
          autoComplete={autoComplete}
          className={inputClasses}
        />
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
