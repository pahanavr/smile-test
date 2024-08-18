import { FC } from "react";
import { UsersListItem } from "./UsersListItem/UsersListItem";
import { User } from "../../lib/types";
import styles from "./UsersList.module.scss";
import { SearchComponent } from "../SearchComponent";

interface UsersListProps {
  users: User[];
}

const listHeaders = ["Имя", "Email", "Адрес", "Компания"];

export const UsersList: FC<UsersListProps> = (props) => {
  const { users } = props;
  return (
    <div className={styles.usersList}>
      <h1 className={styles.usersListTitle}>Список пользователей</h1>
      <SearchComponent />
      <div className={styles.usersListHeader}>
        {listHeaders.map((header, i) => (
          <span key={i} className={styles.usersListHeaderItem}>
            {header}
          </span>
        ))}
      </div>
      {users.map((user) => (
        <UsersListItem key={user.id} user={user} />
      ))}
    </div>
  );
};
