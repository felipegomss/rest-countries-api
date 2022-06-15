import React, {useEffect, useState} from 'react';
import {BsArrowLeft} from 'react-icons/bs';
import {useParams, Outlet} from 'react-router-dom';

import axios from 'axios';

import {
  Container,
  Content,
  Infos,
  Details,
  Border,
  Tags,
  Back,
} from './styles';
function Country() {
  const {name} = useParams();

  const [country, setCountry] = useState([]);

  useEffect(() => {
    // Fetch all the countries
    async function fetchAll() {
      const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${name}`,
      );
      setCountry(response.data);
    }
    fetchAll();
  }, []);

  return (
    <Container>
      <Back to="/">
        <BsArrowLeft />
        Back
      </Back>
      {country.length === 1 &&
        country.map((country, index) => {
          const nativeNames = Object.values(country.name.nativeName);
          const currencies = Object.values(country.currencies);
          const langs = Object.values(country.languages);
          const capitals = country.capital;
          const borders = country.borders;
          const domains = country.tld;

          return (
            <Content key={index}>
              <img
                src={country.flags.png}
                alt={`${country.name.common}'s flag`}
              />
              <Infos>
                <h1>{country.name.common}</h1>
                <Details>
                  <aside>
                    <span>
                      <strong>Native Name:</strong>
                      {/* <span> */}
                      {nativeNames !== undefined &&
                        nativeNames.length > 0 &&
                        nativeNames.map((nativeName, key) => {
                          return <p key={key}>{nativeName.common}</p>;
                        })}
                      {/* </span> */}
                    </span>
                    <span>
                      <strong>Population:</strong>
                      <p>{country.population}</p>
                    </span>
                    <span>
                      <strong>Region:</strong>
                      <p>{country.region}</p>
                    </span>
                    <span>
                      <strong>Sub Region:</strong>
                      <p>{country.subregion}</p>
                    </span>
                    <span>
                      <strong>Capital:</strong>
                      {capitals !== undefined &&
                        capitals.length > 0 &&
                        capitals.map((capital, key) => {
                          return <p key={key}>{capital}</p>;
                        })}
                    </span>
                  </aside>
                  <aside>
                    <span>
                      <strong>Top Level Domain:</strong>
                      {domains !== undefined &&
                        domains.length > 0 &&
                        domains.map((domain, key) => {
                          return <p key={key}>{domain}</p>;
                        })}
                    </span>
                    <span>
                      <strong>Currencies:</strong>
                      {currencies !== undefined &&
                        currencies.length > 0 &&
                        currencies.map((currency, key) => {
                          return <p key={key}>{currency.name}</p>;
                        })}
                    </span>
                    <span>
                      <strong>Languages:</strong>
                      {langs !== undefined &&
                        langs.length > 0 &&
                        langs.map((lang, key) => {
                          return <p key={key}>{lang}</p>;
                        })}
                    </span>
                  </aside>
                </Details>
                <Border>
                  <strong>Border Countries:</strong>
                  <Tags>
                    {borders !== undefined &&
                      borders.length > 0 &&
                      borders.map((border, key) => {
                        return <p key={key}>{border}</p>;
                      })}
                  </Tags>
                </Border>
              </Infos>
            </Content>
          );
        })}

      <Outlet />
    </Container>
  );
}

export default Country;
