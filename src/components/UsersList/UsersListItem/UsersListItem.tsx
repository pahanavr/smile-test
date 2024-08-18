import { FC } from "react";
import { User } from "../../../lib/types";
import styles from "./UsersListItem.module.scss";

interface UsersListItemProps {
  user: User;
}

export const UsersListItem: FC<UsersListItemProps> = (props) => {
  const { user } = props;
  return (
    <div className={styles.usersItem}>
      <span className={styles.usersItemElement}>{user.name}</span>
      <span className={styles.usersItemElement}>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </span>
      <span className={styles.usersItemElement}>{user.address.city}</span>
      <span className={styles.usersItemElement}>{user.company.name}</span>
    </div>
  );
};
