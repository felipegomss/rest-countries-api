import styled from "styled-components";

export const Container = styled.form`
  display: grid;
  margin: 0 auto;

  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 2rem;
  place-content: center;
`;
