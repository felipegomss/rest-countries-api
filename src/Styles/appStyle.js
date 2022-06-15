import RegionFilter from 'react-select';

import styled from 'styled-components';

export const Search = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 1080px) {
    flex-direction: column;

    select {
      width: 65%;
    }
  }
`;
export const InputBox = styled.div`
  width: 35%;
  position: relative;
  input {
    padding: 0 1rem 0 3rem;
    width: 100%;
    height: 38px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    border: 0;
  }
  span {
    position: absolute;
    left: 0.5em;
    bottom: 0em;
  }

  @media (max-width: 1080px) {
    width: 100%;
    margin: 0.5rem 0;
  }
`;

export const Filter = styled(RegionFilter)`
  width: 15%;
  border: 0;
  @media (max-width: 1080px) {
    flex-direction: column;

    width: 65%;
  }
`;
