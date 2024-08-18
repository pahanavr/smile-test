import { FC } from "react";
import { User } from "../../../lib/types";
import styles from "./ListItem.module.scss";

interface ListItemProps {
  item: User;
}

export const ListItem: FC<ListItemProps> = (props) => {
  const { item } = props;
  return (
    <div className={styles.item}>
      <span className={styles.itemElement}>{item.name}</span>
      <span className={styles.itemElement}>
        <a className={styles.itemElementLink} href={`mailto:${item.email}`}>
          {item.email}
        </a>
      </span>
      <span className={styles.itemElement}>{item.address.city}</span>
      <span className={styles.itemElement}>{item.company.name}</span>
    </div>
  );
};
