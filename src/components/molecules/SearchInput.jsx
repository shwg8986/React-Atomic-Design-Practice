import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/Input/Input";
import styled from "styled-components";

export const SearchInput = () => {
  return (
    <SContainer>
      <Input placeholder="検索条件を入力" type="text" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: frex;
  align-items: center;
`;
const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
