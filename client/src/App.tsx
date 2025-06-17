import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { darkTheme, lightTheme } from './styles/themes';
import { styled } from 'styled-components';
import SearchInput from './components/SearchInput';
import RegionFilterDropdown from './components/RegionFilterDropdown'


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
  text-align: center;
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
          <li>Lorem ipsum dolor sit amet,</li>
          <li>Lorem ipsum dolor sit amet,</li>
        </CountriesList>
      </main>
    </ThemeProvider>
  )
}

export default App
