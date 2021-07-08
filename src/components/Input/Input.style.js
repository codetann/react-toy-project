import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 3rem;
  background: #2f3335;
  color: white;
  border: 1px solid #2f3335;
  outline: none;
  border-radius: 0.5rem;
  padding-left: 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  transition: all 0.2s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.486);
  }

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    opacity: 1 !important;
    background: #2f3335;
  }
`;
