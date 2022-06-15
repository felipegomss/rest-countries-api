import styled from "styled-components";

export const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 3%;
  /* width: 300px; */
  margin-bottom: 2rem;
  h1 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
    display: flex;
  }
  strong {
    margin-right: 5px;
  }
`;

export const Detail = styled.div`
  padding: 1rem 2rem 1rem 2rem;
`;

export const Flag = styled.img`
  border-radius: 3% 3% 0 0;
  width: 100%;
  max-height: 150px;
`;
