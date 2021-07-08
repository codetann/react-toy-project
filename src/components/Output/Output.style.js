import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 3rem;

  color: white;
  border: 1px solid #2f3335;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border-radius: 0.5rem;
  padding: 1rem;
  font-size: 0.7rem;
  margin-bottom: 1rem;
  transition: all 0.2s;

  h3 {
    font-weight: 400;
    margin-right: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.486);
  }
`;
