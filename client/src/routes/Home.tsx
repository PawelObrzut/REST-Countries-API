import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components';
import SearchInput from '../components/SearchInput';
import RegionFilterDropdown from '../components/RegionFilterDropdown'
import CountryCard from '../components/CountryCard'

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 3rem;

  @media screen and (min-width: 578px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const CountriesList = styled.ul`
  text-align: left;
  display: grid;
  justify-content: center;
  gap: 4rem;
  padding: 0 2rem;
  
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
`

type Country = {
  flag: string,
  name: string,
  population: number,
  region: string,
  capital: string,
}


const Home = () => {
  const [countriesCollectionList, setCountriesCollectionList] = useState<Country[]>([])
  const [region, setRegion] = useState<string>()
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('https://rest-countries-api-production-f53c.up.railway.app/api/allCountries');
        if (!res.ok) throw new Error(`Status: ${res.status}`);
        const data = await res.json();
        setCountriesCollectionList(data.payload);
      } catch (err) {
        console.error('Failed to fetch countries:', err);
      }
    };

    fetchCountries();
  }, []);

  return (
    <main>
      <ControlsWrapper>
        <SearchInput handleInputChange={handleInputChange} inputValue={inputValue}/>
        <RegionFilterDropdown setRegion={setRegion} />

      </ControlsWrapper>
      <CountriesList>
        {
          countriesCollectionList
            .filter((country) => !region || country.region === region)
            .filter((country) => country.name.toLowerCase().includes(inputValue.toLowerCase()))
            .map(({ flag, name, population, region, capital }) => (
              <CountryCard key={name} flag={flag} country={name} population={population} region={region} capital={capital} />
            ))
        }
      </CountriesList>
    </main>
  )
}

export default Home