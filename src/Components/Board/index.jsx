import React from 'react';
import {useEffect} from 'react';
import {useState} from 'react';
import {GoSearch} from 'react-icons/go';
import {Link} from 'react-router-dom';

import {Search, InputBox, Filter} from '~/Styles/appStyle';
import axios from 'axios';

import Card from '../Card';
import {Container} from './styles';

const regionFilterOptions = [
  {value: 'africa', label: 'Africa'},
  {value: 'americas', label: 'Americas'},
  {value: 'asia', label: 'Asia'},
  {value: 'europe', label: 'Europe'},
  {value: 'oceania', label: 'Oceania'},
];

function Board() {
  const [selectData, setSelect] = useState('');
  const [inputData, setInput] = useState('');

  const [dataAll, setDataAll] = useState([]);

  useEffect(() => {
    // Fetch all the countries
    async function fetchAll() {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      setDataAll(response.data);
    }
    fetchAll();
  }, []);

  function handleChange(e) {
    if (e.target) {
      const value = e.target.value;
      setInput(value);
      return;
    }
    setSelect(e.value);
    setInput('');
  }

  return (
    <>
      <Search>
        <InputBox>
          <input
            type='text'
            value={inputData}
            onChange={handleChange}
            placeholder='Search for a country...'
          />
          <span>
            <GoSearch size='1.7em' />
          </span>
        </InputBox>

        <Filter
          options={regionFilterOptions}
          onChange={handleChange}
          placeholder='Filter by region'
          className='region-filter-container'
          classNamePrefix='region-filter'
        />
      </Search>
      <Container>
        {dataAll.length > 0 &&
          dataAll
              .filter((country) => {
                console.log(selectData);
                if (inputData) {
                  if (
                    country.name.common
                        .toLowerCase()
                        .includes(inputData.toLocaleLowerCase())
                  ) {
                    return country;
                  }
                } else {
                  if (!selectData) {
                    return country;
                  } else if (country.region.toLowerCase() === selectData) {
                    return country;
                  }
                }
              })
              .map((country, index) => {
                const capitals = [country.capital];
                return (
                  <Link to={`/country/${country.cca3}`} key={index}>
                    <Card
                      img={country.flags.png}
                      name={country.name.common}
                      population={country.population}
                      region={country.region}
                      capital={capitals}
                      key={index}
                    />
                  </Link>
                );
              })}
      </Container>
    </>
  );
}

export default Board;
