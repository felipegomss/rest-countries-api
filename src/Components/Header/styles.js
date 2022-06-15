import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: hsl(0, 0%, 100%);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  div {
    margin: 0 auto;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    button {
      border: 0;
      background-color: transparent;
      span {
        display: flex;
        align-items: center;
        h3 {
          font-weight: 300;
          margin-left: 5px;
        }
      }
    }
  }

  @media (max-width: 1080px) {
    div {
      h1 {
        font-size: 1rem;
      }
    }
  }
`;
