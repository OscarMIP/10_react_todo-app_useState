import styles from "./ListContainer.module.css";

export const ListContainer = ({ children }) =>{
    return <div className={styles["list-container"]}>{children}</div>;
}