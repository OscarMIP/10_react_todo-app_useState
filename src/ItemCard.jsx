import styles from "./ItemCard.module.css";

export const ItemCard = ({ title, description, status }) => {

    const statusClass = status === "pending" 
    ? styles.pending 
    : status === "in progress"
    ? styles.inProgress 
    : styles.done;

    return (
        <div className={styles["item-card"]}>
        <h4 className={styles["item-card-title"]}>{title}</h4>
        <p className={styles["item-card-description"]}>{description}</p>
        <p className={`${styles["item-card-status"]} ${statusClass}`}>{status.toUpperCase()}</p>
        </div>
    );
}
