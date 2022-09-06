import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

interface FoodTruckListProps {
  names: string[];
}

const FoodTruckList = (props: FoodTruckListProps) => {
  return (
    <Container>
      <ol>
        {props.names.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </Container>
  );
};

export default FoodTruckList;
