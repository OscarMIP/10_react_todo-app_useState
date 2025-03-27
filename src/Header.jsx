import styles from "./Header.module.css";

export const Header = ({ title }) => {
    return <h1 className={styles["header"]}>{title}</h1>;
  };
