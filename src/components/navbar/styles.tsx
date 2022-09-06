import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  /* background-color: #7e2e84; */
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(126, 46, 132, 1) 50%,
    rgba(2, 0, 36, 1) 100%
  );
  height: 60px;
`;

export const Header = styled.h1`
  font-size: 48px;
  font-family: "Caveat";
`;
