import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `Quest2-No.${val}`,
    image: "https://source.unsplash.com/MvJezf8FT4o",
    email: "Oculus@gmail.com",
    phone: "000-0000-0000",
    company: {
      name: "Oculus"
    },
    website: "https://Oculus.com"
  };
});

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザの一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;
