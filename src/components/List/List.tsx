/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from "react";
import { SortOrder, User } from "../../lib/types";
import styles from "./List.module.scss";
import { SearchComponent } from "../SearchComponent";
import { ListItem } from "./ListItem";

interface ListProps {
  data: User[];
  onSearch: (value: string) => void;
  onResetSearch: () => void;
  searchValue: string;
}

const listHeaders = [
  { key: "name", label: "Имя" },
  { key: "email", label: "Email" },
  { key: "address.city", label: "Адрес" },
  { key: "company.name", label: "Компания" },
];

export const List: FC<ListProps> = (props) => {
  const { data, onSearch, onResetSearch, searchValue } = props;
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    order: SortOrder;
  }>({ key: "", order: "none" });

  const handleSort = (key: string) => {
    let order: SortOrder = "asc";
    if (sortConfig.key === key && sortConfig.order === "asc") {
      order = "desc";
    } else if (sortConfig.key === key && sortConfig.order === "desc") {
      order = "none";
    }
    setSortConfig({ key, order });
  };

  const sortedData = [...data];

  if (sortConfig.order !== "none") {
    sortedData.sort((a, b) => {
      const aValue = sortConfig.key.split(".").reduce((o: any, i) => o[i], a);
      const bValue = sortConfig.key.split(".").reduce((o: any, i) => o[i], b);

      if (aValue < bValue) return sortConfig.order === "asc" ? -1 : 1;
      if (aValue > bValue) return sortConfig.order === "asc" ? 1 : -1;
      return 0;
    });
  }

  return (
    <div className={styles.list}>
      <h1 className={styles.listTitle}>Список пользователей</h1>
      <SearchComponent onSearch={onSearch} searchValue={searchValue} />
      <div className={styles.listMain}>
        {sortedData.length > 0 ? (
          <div className={styles.listItems}>
            <div className={styles.listHeader}>
              {listHeaders.map((header) => (
                <span
                  key={header.key}
                  className={styles.listHeaderItem}
                  onClick={() => handleSort(header.key)}
                >
                  {header.label}
                  {sortConfig.key === header.key && (
                    <span>
                      {sortConfig.order === "asc"
                        ? " ↑"
                        : sortConfig.order === "desc"
                        ? " ↓"
                        : ""}
                    </span>
                  )}
                </span>
              ))}
            </div>
            {sortedData.map((user) => (
              <ListItem key={user.id} item={user} />
            ))}
          </div>
        ) : (
          <div className={styles.listPlug}>
            <h2>По вашему запросу ничего не найдено</h2>
            <button onClick={onResetSearch} className={styles.listPlugButton}>
              Сбросить
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
