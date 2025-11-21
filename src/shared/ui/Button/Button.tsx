import styles from './Button.module.css';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

function Button(props: ButtonProps) {
  const { children } = props;
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
