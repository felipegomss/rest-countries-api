import React from 'react';

import {Container, Detail, Flag} from './styles';


function Card(props) {
  return (
    <Container>
      <Flag src={props.img} alt={`${props.name}'s flag`}></Flag>
      <Detail>
        <h1>{props.name}</h1>
        <p>
          <strong>Population: </strong> {props.population}
        </p>
        <p>
          <strong>Region: </strong>
          {props.region}
        </p>
        <p>
          <strong>Capital: </strong>
          {props.capital.length > 0 &&
            props.capital.map((capital, key) => {
              return <p key={key}>{capital}</p>;
            })}
        </p>
      </Detail>
    </Container>
  );
}

export default Card;
