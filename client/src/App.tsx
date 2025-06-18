import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { darkTheme, lightTheme } from './styles/themes';
import { styled } from 'styled-components';
import SearchInput from './components/SearchInput';
import RegionFilterDropdown from './components/RegionFilterDropdown'
import CountryCard from './components/CountryCard'

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

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  const [countriesCollectionList, setCountriesCollectionList] = useState<Country[]>([])

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/allCountries');
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
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <ControlsWrapper>
          <SearchInput />
          <RegionFilterDropdown />

        </ControlsWrapper>
        <CountriesList>
          {
            countriesCollectionList.map(({ flag, name, population, region, capital }) => (
              <CountryCard key={name} flag={flag} country={name} population={population} region={region} capital={capital} />
            ))
          }
        </CountriesList>
      </main>
    </ThemeProvider>
  )
}

export default App
