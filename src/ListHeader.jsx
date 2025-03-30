import styles from "./ListHeader.module.css";

export function ListHeader({ content }) {
  return <h3 className={styles}>{content}</h3>;
};
