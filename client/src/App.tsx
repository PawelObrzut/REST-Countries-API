import { useState } from 'react';
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

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

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
          <CountryCard flag='https://flagcdn.com/de.svg' country='Germany' population={83240525} region='Europe' capital='Berlin' />
          <CountryCard flag='https://flagcdn.com/de.svg' country='Germany' population={83240525} region='Europe' capital='Berlin' />
          <CountryCard flag='https://flagcdn.com/de.svg' country='Germany' population={83240525} region='Europe' capital='Berlin' />
          <CountryCard flag='https://flagcdn.com/de.svg' country='Germany' population={83240525} region='Europe' capital='Berlin' />
          <CountryCard flag='https://flagcdn.com/de.svg' country='Germany' population={83240525} region='Europe' capital='Berlin' />
          <CountryCard flag='https://flagcdn.com/de.svg' country='Germany' population={83240525} region='Europe' capital='Berlin' />

        </CountriesList>
      </main>
    </ThemeProvider>
  )
}

export default App
