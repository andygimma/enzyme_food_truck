import styled from "styled-components";
import { SMALL_DISPLAY } from "styles/global";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 48px;
  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    display: block;
  }
`;

export const Sidebar = styled.div`
  width: 30%;
  padding-right: 24px;

  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    width: 100%;
    padding: 12px;
  }
`;

export const MainLayout = styled.div`
  width: 70%;
  padding-left: 24px;

  @media only screen and (max-width: ${SMALL_DISPLAY}) {
    width: 100%;
    padding: 12px;
  }
`;
