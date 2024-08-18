import styles from "./SearchComponent.module.scss";

export const SearchComponent = () => {
  return (
    <div className={styles.search}>
      <label className={styles.searchTitle}>Поиск</label>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Найти..."
      />
    </div>
  );
};
