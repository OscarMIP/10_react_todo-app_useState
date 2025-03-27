import styles from "./ItemsList.module.css";
import { ItemCard } from "./ItemCard";

export function ItemsList({ itemsList }) {
  return (
    <ul>
        {itemsList.map((item) => (
            <li key={item.id} className={styles["items-list"]}>
            <ItemCard title={item.title} description={item.description} status={item.status} />
            </li>
        ))}
    </ul>
  );
}