import React from "react";
import styled from "@emotion/styled";
import data from "./Food.json";
import { useState } from "react";


const Container = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 60vh;
  width: 900px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  h1 {
    font-size: 50px;
    font-weight: 800;
    color: #db5f06;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }

  button {
    margin-top: 80px;
  }
`;
const Morning = styled.div`
  font-size: 20px;
  font-weight: 600;

`;
const Afternoon = styled.div`
  font-size: 20px;
  font-weight: 600;

`;
const Evening = styled.div`
  font-size: 20px;
  font-weight: 600;

`;


export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const PreQuote = () => {
    const Random = Math.floor(Math.random() * data.length);
    setCount(Random);
  };

  return (
    <Container>  
      <Wrapper>
        <h1>Daily Food Routine</h1>
          <Morning>
            Morning ~ {"         "}
            {data[count % data.length]?.Morning} 
          </Morning>
          <Afternoon>
            Afternoon ~ {"         "}
            {data[count % data.length]?.Afternoon}
          </Afternoon>
          <Evening>
            Evening ~ {"         "}
            {data[count % data.length]?.Evening}
          </Evening>
          <Morning>Price Of Your Meals~ {data[count % data.length]?.Price1}</Morning>
        <button onClick={PreQuote}>Get Your Meal</button>
      </Wrapper>
    </Container>
  );
};
