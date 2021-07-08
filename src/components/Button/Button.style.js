import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3rem;
  background: #098ec8;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;
