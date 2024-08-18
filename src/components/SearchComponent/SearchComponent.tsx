import { FC } from "react";
import styles from "./SearchComponent.module.scss";

interface SearchComponentProps {
  onSearch: (value: string) => void;
  searchValue: string;
}

export const SearchComponent: FC<SearchComponentProps> = (props) => {
  const { onSearch, searchValue } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <div className={styles.search}>
      <label className={styles.searchTitle}>Поиск</label>
      <input
        className={styles.searchInput}
        type="search"
        placeholder="Найти..."
        onChange={handleInputChange}
        value={searchValue}
      />
    </div>
  );
};
