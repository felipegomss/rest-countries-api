import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  place-items: center;
  grid-gap: 2rem;
  img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
  }
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 300px;
    grid-gap: 0;
  }
`;
export const Details = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  aside {
    span {
      display: flex;
      flex-wrap: wrap;
      p {
        margin-left: 5px;
      }
    }
  }
  @media (max-width: 1080px) {
    grid-gap: 1rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
export const Infos = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`;
export const Border = styled.p`
  width: 100%;
  display: flex;
  strong {
    margin-right: 10px;
  }
  flex-direction: column;
`;

export const Tags = styled.div`
  margin: 0.5rem 0;
  width: 100%;
  grid-gap: 10px;
  display: grid;
  grid-template-rows: 20px;
  grid-template-columns: repeat(auto-fill, 70px);

  p {
    width: 100%;
    display: grid;
    place-items: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }
`;
export const Back = styled(Link)`
  width: fit-content;
  margin: 3rem 0 3rem 0;
  padding: 0.5rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;
