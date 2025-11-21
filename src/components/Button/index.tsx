import styles from './style.module.scss';

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
  onClick: () => void;
}

export const Button = ({ onClick, children, disabled = false }: Props) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
