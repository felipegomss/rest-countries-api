import React, {useEffect, useState} from 'react';
import {RiMoonLine, RiMoonFill} from 'react-icons/ri';

import {Container} from './styles';


function Header() {
  const [toogle, setToogle] = useState(true);
  const [fill, setFill] = useState('none');
  const [line, setLine] = useState('block');
  useEffect(() => {
    setFill((state) => (toogle ? 'none' : 'block'));
    setLine((state) => (toogle ? 'block' : 'none'));
  }, [toogle]);

  return (
    <Container>
      <div>
        <h1>Where in the world?</h1>
        <button onClick={(e) => setToogle((state) => !state)}>
          <span>
            <RiMoonLine size="1rem" style={{display: line}} />
            <RiMoonFill size="1rem" style={{display: fill}} />
            <h3>Dark Mode</h3>
          </span>
        </button>
      </div>
    </Container>
  );
}

export default Header;
