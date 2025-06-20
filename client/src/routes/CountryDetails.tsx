import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import { IoIosArrowRoundBack } from "react-icons/io";
import CountryArticle from '../components/CountryArticle'

const GoBackButton = styled.button`
  display: flex;
  gap: .5rem;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  box-shadow: 0 2px 8px var(--black10);
`;

const DetailsWrapper = styled.div`
  margin: 4rem 2rem;
`;

type CountryData = {
  flag: string,
  name: string,
  nativeName: string,
  topLevelDomain: string[],
  population: number,
  region: string,
  subregion: string,
  capital: string,
  currencies: string[],
  languages: string[],
  borders: string[],
}

const CountryDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState<CountryData>()

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/${name}`);
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        const response = await res.json();
        setData(response.payload);
      } catch (err) {
        console.error('Failed to fetch countries:', err);
      }
    };

    fetchCountries();
  }, [name]);


  if (!data) return (
    <DetailsWrapper>
      <p>Loading...</p>
    </DetailsWrapper>
  )

  return (
    <main>
      <DetailsWrapper>
        <Link to='/'>
          <GoBackButton>
            <IoIosArrowRoundBack size='2rem' /> Go Back
          </GoBackButton>
        </Link>

        <CountryArticle
          flag={data.flag}
          name={data.name}
          nativeName={data.nativeName}
          domain={data.topLevelDomain || []}
          population={data.population}
          region={data.region}
          subRegion={data.subregion}
          capital={data.capital}
          currencies={data.currencies || []}
          languages={data.languages || []}
          neighbours={data.borders || []}
        />

      </DetailsWrapper>
    </main>
  );
};

export default CountryDetails;
