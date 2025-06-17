import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { darkTheme, lightTheme } from './styles/themes';
import { styled } from 'styled-components';
import { IoSearchSharp } from "react-icons/io5";

const ControlsWrapper = styled.div`
  display: flex;
  padding: 1.5rem;
`

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
`

const SearchInput = styled.input`
  display: block;
  margin: 0 auto;
  padding: 1rem 1rem 1rem 3rem;
  background-color: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  border-radius: .5rem;
  box-shadow: 0 2px 8px var(--black10);
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`

const SearchIcon = styled(IoSearchSharp)`
  color: ${({ theme }) => theme.placeholder};
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  font-size: 1.25rem;
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
          <SearchContainer>
            <SearchIcon />
            <SearchInput type="text" placeholder="Search for a country..." />
          </SearchContainer>
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
