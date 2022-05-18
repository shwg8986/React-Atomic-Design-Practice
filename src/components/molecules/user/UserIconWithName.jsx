import React from "react";
import styled from "styled-components";
import { memo } from "react";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/UserState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  return (
    <SContainer>
      <SImg height={160} widhth={160} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit> 編集 </SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: under-line;
  color: #aaa;
  cursor: pointer;
`;
