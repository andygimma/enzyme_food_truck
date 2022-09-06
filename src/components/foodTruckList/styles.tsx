import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;
export const OrderedList = styled.ol`
  width: 100%;
  list-style-type: none;
  div:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const CardListItem = styled.li`
  padding: 24px;
  width: 100%;
  border-radius: 12px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(126, 46, 132, 1) 50%,
    rgba(2, 0, 36, 1) 100%
  );
  color: white;
  opacity: 0.9;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 4px;
`;

export const CardFoodItems = styled.p`
  text-decoration: underline;
  font-weight: bold;
`;

export const Header2 = styled.h2`
  text-transform: uppercase;
`;
