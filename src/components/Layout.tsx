import type { ReactNode } from "react";
import styled from "styled-components";

type IChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: IChildrenProps) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  padding-top: 14vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 35px 25px 30px;
  min-height: 500px;
  box-shadow: 0px 1px 22px -12px #607d8b;
  background-color: #fff;
`;

export const BtnWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  align-content: stretch;
`;

export const ChartWrapper = styled.div`
  width: 100%;
`;
