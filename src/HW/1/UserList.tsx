type AddressType = {
  // street: any; // ПОДПРАВЛЯЕМ any
  // city: any; // ПОДПРАВЛЯЕМ any
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  // ПРИДЕТСЯ САМОМУ)
    id: number;
    name: string;
    age: number;
    address: AddressType;
};

type UserListPropsType = {
  // users: UserType; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
  users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

// export const UserList = (props: 'ВСТАВЛЯЕМ ТИПИЗАЦИЮ') => {
export const UserList = (props: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {props.users.map((user) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
          // <li key={ЭЛЕМЕНТ МАССИВА.id} id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>
          <li key={user.id} id={`hw01-user-${user.id}`}>
            {/*<strong>{ЭЛЕМЕНТ МАССИВА.name}</strong> (Age: {ЭЛЕМЕНТ МАССИВА.age})<strong> Address:</strong>*/}
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {/*{ЭЛЕМЕНТ МАССИВА.address.street}, {ЭЛЕМЕНТ МАССИВА.address.city}*/}
            {user.address.street}, {user.address.city}
          </li>
        ))}
      </ul>

    </div>
  );
};
