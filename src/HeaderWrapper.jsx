import styles from "./HeaderWrapper.module.css";

export const HeaderWrapper = ({ children }) =>{
    return <div className={styles["header__wrapper"]}>{children}</div>;
}
