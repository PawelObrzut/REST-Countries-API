import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import { darkTheme, lightTheme } from './styles/themes';

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <div>
          Lorem ipsum dolor sit amet,
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
